const {addTabQueryToRecordUrl} = require('../../plugins/search-tabs/record-url');

/**
 * First-party Crawler extraction. Keep this function self-contained: the hosted
 * Crawler receives its source, together with the supported URL helper, from
 * scripts/search-crawler.cjs. It uses only the Crawler's documented context.
 */
function extractSearchRecords({$, url, helpers}, format, resolveTabUrl) {
  const pageUrl = new URL(url);
  const path = decodeURIComponent(pageUrl.pathname).replace(/\/+$/, '') || '/';
  if (path === '/search' || path === '/blog' || path === '/blog/archive' ||
      /^\/blog\/(?:tags|page)(?:\/|$)/.test(path)) return [];

  const category = path.startsWith('/api/') ? 'API' :
    path.startsWith('/blog/') ? 'Blog' :
      path.startsWith('/videos/') ? 'Videos' : 'Documentation';
  const language = $('meta[name="docsearch:language"]').attr('content') || 'en';
  const parametersByAnchor = Object.create(null);
  const sectionsByAnchor = Object.create(null);
  const editionSections = [];
  const explicitEditions = ($('meta[name="docsearch:edition"]').attr('content') || '')
    .split(',').map(value => value.trim()).filter(value => ['pro', 'community'].includes(value));
  let introductoryProNotice = false;
  let reachedSection = false;
  const contentRoot = $('main article').length ? $('main article').first() : $('main').first();
  let sectionAnchor = '';
  contentRoot.find('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').each((_, element) => {
    const heading = $(element);
    const tag = element.tagName || element.name;
    const anchor = heading.attr('id');
    if (tag === 'h1') sectionAnchor = '';
    if (tag === 'h2') sectionAnchor = anchor;
    sectionsByAnchor[anchor] = sectionAnchor || anchor;
  });
  contentRoot.find('h2, h3, h4, h5, h6, .theme-admonition').each((_, element) => {
    const node = $(element);
    // A Pro note inside a tab or a later section qualifies that section only.
    if (node.closest('[role="tabpanel"]').length) return;
    if (/^h[2-6]$/.test(element.tagName || element.name || '')) reachedSection = true;
    if (!reachedSection && node.hasClass('theme-admonition') &&
        node.children().first().text().trim() === 'Pro Feature') introductoryProNotice = true;
  });
  const pageIsPro = /^\/docs\/pro[ -]features\//i.test(path) || introductoryProNotice;
  const knownEditions = new Set([...explicitEditions, ...(pageIsPro ? ['pro'] : [])]);
  const tabSections = [];
  // Docusaurus server-rendered tabs have no aria-labelledby connection. Their
  // direct tab list and panel list are in matching order. Scope both lists to
  // their own container so nested platform/edition tabs cannot label each other.
  // Markdown otherwise retains a list of labels followed by unlabeled panels.
  contentRoot.find('.theme-tabs-container').each((_, element) => {
    const container = $(element);
    const labels = container.children('[role="tablist"]').children('[role="tab"]');
    const panels = container.children().children('[role="tabpanel"]');
    if (!labels.length || labels.length !== panels.length) return;
    panels.each((index, panel) => {
      const label = labels.eq(index).text().replace(/\s+/g, ' ').trim();
      if (!label) return;
      tabSections.push({panel: $(panel), label});
      if (/^Phoenix Pro$/i.test(label)) knownEditions.add('pro');
      if (/^Community(?: \(free\))?$/i.test(label)) knownEditions.add('community');
    });
  });

  $('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').each((_, element) => {
    const heading = $(element);
    const parameters = heading.attr('data-search-params');
    if (!parameters) return;
    const anchor = heading.attr('id');
    parametersByAnchor[anchor] = parameters;
    const edition = new URLSearchParams(parameters).get('edition');
    if (!['pro', 'community'].includes(edition)) return;
    knownEditions.add(edition);
    const sectionUrl = new URL(pageUrl);
    sectionUrl.hash = anchor;
    editionSections.push({
      heading: heading.text().replace(/\u200b/g, '').trim(),
      edition,
      url: resolveTabUrl(sectionUrl.href, parametersByAnchor),
    });
  });

  const editions = [...knownEditions];
  // Absence of a Pro marker does not establish Community availability.
  const edition = editions.length > 1 ? 'mixed' : editions[0] || 'unspecified';
  const baseMetadata = {category, edition, editions, lang: language};

  if (format === 'docsearch') {
    const records = helpers.docsearch({
      recordProps: {
        lvl0: {selectors: '', defaultValue: category},
        lvl1: ['article h1', 'main h1', 'header h1', 'h1', 'head > title'],
        lvl2: ['article h2', 'main h2', 'h2'],
        lvl3: ['article h3', 'main h3', 'h3'],
        lvl4: ['article h4', 'main h4', 'h4'],
        lvl5: ['article h5', 'main h5', 'h5'],
        lvl6: ['article h6', 'main h6', 'h6'],
        content: ['article p, article li', 'main p, main li'],
      },
      aggregateContent: true,
      recordVersion: 'v3',
    });
    return records.map(record => {
      const recordUrl = resolveTabUrl(record.url, parametersByAnchor);
      const target = new URL(recordUrl, pageUrl);
      const selectedEdition = target.searchParams.get('edition');
      let anchor = target.hash.slice(1);
      try { anchor = decodeURIComponent(anchor); } catch (error) { /* Keep malformed anchors distinct. */ }
      const section = new URL(target);
      // Keep the best matching nested heading for each article section. All
      // records remain searchable, and different edition queries stay separate.
      // API entries are independent interfaces, even under a shared heading.
      if (category !== 'API' && sectionsByAnchor[anchor]) section.hash = sectionsByAnchor[anchor];
      target.hash = '';
      return {
        ...record,
        ...baseMetadata,
        ...(['pro', 'community'].includes(selectedEdition) ? {
          edition: selectedEdition,
          editions: [selectedEdition],
        } : {}),
        url: recordUrl,
        url_without_anchor: target.href,
        section_url: section.href,
      };
    });
  }

  if (format !== 'markdown') throw new Error(`Unsupported search format: ${format}`);

  // Make the edition boundaries readable in the model's actual text context,
  // as well as in structured attributes. Restore the source DOM afterwards so
  // another extraction action cannot inherit these indexing-only annotations.
  const annotations = [];
  const restoreMedia = [];
  let text;
  try {
    for (const {panel, label} of tabSections) {
      const start = $('<p></p>').text(`[Start of tab: ${label}]`);
      const end = $('<p></p>').text(`[End of tab: ${label}]`);
      panel.prepend(start);
      panel.append(end);
      annotations.push(start, end);
    }
    // Small Docusaurus images can be inlined as data URLs. Index a real image
    // link when the page provides one; binary data is not useful model context.
    // Keep the article and the other extraction action unchanged.
    const imageUrl = (value, requireImageFile = false) => {
      if (!value) return null;
      try {
        const target = new URL(value, pageUrl);
        return /^https?:$/.test(target.protocol) && (!requireImageFile ||
          /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(target.pathname)) ? target.href : null;
      } catch (error) {
        return null;
      }
    };
    // Inline SVG geometry disappears during Markdown conversion. The component
    // supplies a build-generated image URL for each actual control shape.
    $('main svg[data-tutorial-icon-src]').each((_, element) => {
      const icon = $(element);
      const source = imageUrl(icon.attr('data-tutorial-icon-src'), true);
      if (!source) return;
      const target = new URL(source);
      if (target.origin !== pageUrl.origin ||
          !/\/img\/tutorial-icons\/[a-zA-Z][a-zA-Z0-9-]*\.svg$/.test(target.pathname) ||
          target.search || target.hash) return;
      const label = icon.closest('[data-tutorial-icon-label]').text().trim();
      const image = $('<img>').attr('src', source).attr('alt', label ? `${label} icon` : 'Control icon');
      icon.replaceWith(image);
      restoreMedia.push(() => image.replaceWith(icon));
    });
    $('main img').each((_, element) => {
      const image = $(element);
      const source = image.attr('src');
      const replacement = imageUrl(source) ||
        imageUrl(image.closest('a[href]').attr('href'), true) || imageUrl(image.attr('data-src'));
      if (replacement === source) return;
      if (replacement) {
        image.attr('src', replacement);
        restoreMedia.push(() => source === undefined ? image.removeAttr('src') : image.attr('src', source));
      } else {
        // Preserve the description without presenting an unusable screenshot.
        const description = $('<span></span>').text(image.attr('alt') || '');
        image.replaceWith(description);
        restoreMedia.push(() => description.replaceWith(image));
      }
    });
    $('main a[href]').each((_, element) => {
      const link = $(element);
      const href = link.attr('href');
      if (/^\s*(?:data|blob):/i.test(href)) {
        link.removeAttr('href');
        restoreMedia.push(() => link.attr('href', href));
      } else if (link.find('img').length) {
        const fullSize = imageUrl(href, true);
        if (fullSize && fullSize !== href) {
          link.attr('href', fullSize);
          restoreMedia.push(() => link.attr('href', href));
        }
      }
    });
    for (const section of editionSections) {
      const label = section.edition === 'pro' ? 'Phoenix Pro' : 'Community (free)';
      const anchor = decodeURIComponent(new URL(section.url).hash.slice(1));
      const heading = $('[id]').filter((_, element) => $(element).attr('id') === anchor).first();
      const marker = $('<span></span>').text(`[${label}] `);
      heading.prepend(marker);
      annotations.push(marker);
      const source = $('<p></p>');
      source.append($('<a></a>').attr('href', section.url).text(`${label}: ${section.heading}`));
      heading.after(source);
      annotations.push(source);
    }
    text = helpers.markdown('main');
  } finally {
    annotations.forEach(element => element.remove());
    restoreMedia.reverse().forEach(restore => restore());
  }
  if (!text || !text.trim()) return [];

  const heading = $('main h1').first().text().replace(/\u200b/g, '').trim();
  const title = heading || $('head > title').text().trim();
  const version = $('meta[name="docsearch:version"]').attr('content') || 'latest';
  const tags = $('meta[name="docsearch:docusaurus_tag"]').attr('content') || '';
  const availability = edition === 'pro' ? 'Edition availability: Phoenix Pro only.\n\n' :
    edition === 'community' ? 'Edition availability: Community (free).\n\n' :
      edition === 'mixed' ? 'Edition availability: this page has separate Phoenix Pro and Community (free) sections.\n\n' : '';
  const sourceContext = category === 'API' ?
    'Source context: developer API reference. Command identifiers, functions, and preference keys describe code interfaces. Their presence does not establish a visible menu item, shortcut, or settings control. User-interface availability and access paths need separate end-user documentation.\n\n' : '';
  const records = helpers.splitTextIntoRecords({
    text,
    baseRecord: {
      ...baseMetadata,
      url: pageUrl.href,
      objectID: pageUrl.href,
      title,
      heading,
      language,
      version: version.split(',').map(value => value.trim()).filter(Boolean),
      docusaurus_tag: tags.split(',').map(value => value.trim()).filter(Boolean),
      editionSections,
    },
    // Reserve room for source context and the edition label in every chunk.
    maxRecordBytes: 99000,
    orderingAttributeName: 'part',
  });
  return records.map(record => ({...record, text: sourceContext + availability + record.text}));
}

function extractDocSearchRecords(context) {
  return extractSearchRecords(context, 'docsearch', addTabQueryToRecordUrl);
}

function extractMarkdownRecords(context) {
  return extractSearchRecords(context, 'markdown', addTabQueryToRecordUrl);
}

module.exports = {extractSearchRecords, extractDocSearchRecords, extractMarkdownRecords};

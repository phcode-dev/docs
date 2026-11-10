const fs = require('node:fs/promises');
const path = require('node:path');

// Use Docusaurus's loaded content, not its cache directory: cached metadata can
// outlive renamed/deleted docs. The output links to the rendered pages, which
// retain both edition tabs, icon labels, videos, and other MDX content.
function singleLine(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function escapeMarkdown(value) {
  return singleLine(value).replace(/[\\`*_[\]<>]/g, '\\$&');
}

function docLink(doc, siteUrl) {
  const url = new URL(doc.permalink, siteUrl).href
    .replace(/\(/g, '%28').replace(/\)/g, '%29');
  let description = singleLine(doc.description);
  if (description.length > 240) {
    description = `${description.slice(0, 237).replace(/\s+\S*$/, '')}…`;
  }
  return `- [${escapeMarkdown(doc.title)}](${url})${description ? `: ${escapeMarkdown(description)}` : ''}`;
}

function sections(docs, siteUrl, introduction) {
  const groups = new Map();
  for (const doc of docs) {
    const directory = doc.sourceDirName.split('/')[0];
    if (!groups.has(directory)) groups.set(directory, []);
    groups.get(directory).push(doc);
  }
  // The short practice guides are the most useful entry point for beginners.
  const groupNames = [...groups.keys()].sort((a, b) => {
    const aTutorials = /^\d+-Tutorials$/.test(a);
    const bTutorials = /^\d+-Tutorials$/.test(b);
    if (aTutorials !== bTutorials) return aTutorials ? -1 : 1;
    return a.localeCompare(b, 'en', {numeric: true});
  });
  const output = [introduction];
  for (const group of groupNames) {
    const heading = group === '.' ? 'Getting started' : group.replace(/^\d+-/, '').replace(/-/g, ' ');
    const ordered = groups.get(group).sort((a, b) => {
      const aIndex = /\/index\.mdx?$/.test(a.source);
      const bIndex = /\/index\.mdx?$/.test(b.source);
      if (aIndex !== bIndex) return aIndex ? -1 : 1;
      return a.source.localeCompare(b.source, 'en', {numeric: true});
    });
    output.push(`## ${escapeMarkdown(heading)}\n\n${ordered.map(doc => docLink(doc, siteUrl)).join('\n')}`);
  }
  return `${output.join('\n\n')}\n`;
}

module.exports = function llmsTxtPlugin({siteConfig}) {
  let docsContent = {};
  return {
    name: 'phoenix-docs-llms-txt',
    allContentLoaded({allContent}) {
      docsContent = allContent['docusaurus-plugin-content-docs'] || {};
    },
    injectHtmlTags() {
      return siteConfig.noIndex ? {} : {
        headTags: [{tagName: 'link', attributes: {
          rel: 'describedby',
          href: `${siteConfig.baseUrl}llms.txt`,
          type: 'text/plain',
        }}],
      };
    },
    async postBuild({outDir, routesBuildMetadata}) {
      if (siteConfig.noIndex) return;
      const publicDocs = (id) => {
        const version = docsContent[id]?.loadedVersions.find(item => item.isLast && !item.noIndex);
        const seen = new Set();
        return (version?.docs || []).filter(doc => {
          const route = routesBuildMetadata[doc.permalink];
          if (doc.draft || doc.unlisted || !route || route.noIndex || seen.has(doc.permalink)) return false;
          seen.add(doc.permalink);
          return true;
        });
      };
      const docs = publicDocs('default');
      if (!docs.length) throw new Error('Cannot generate llms.txt: no public documentation pages were found.');

      let index = sections(docs, siteConfig.url, [
        '# Phoenix Code documentation',
        '> Official user guides and tutorials for Phoenix Code, a code editor for building websites, with Live Preview and visual editing features.',
        'The tutorials distinguish the free Community edition from Phoenix Pro. Pro offers visual editing; Community guides explain how to locate and edit the HTML. Check the edition and platform requirements on each page.',
        'Links below open the complete documentation pages, including screenshots, videos, code examples, and both edition tabs. This index is regenerated from the current public documentation on every site build.',
      ].join('\n\n'));

      const apiDocs = publicDocs('api');
      if (apiDocs.length) {
        const apiIndexUrl = new URL(`${siteConfig.baseUrl}api/llms.txt`, siteConfig.url).href;
        index += `\n## Optional\n\n- [Extension developer documentation](${apiIndexUrl}): A separate index of extension and theme development guides, UI recipes, and API reference pages.\n`;
        const apiIndex = sections(apiDocs, siteConfig.url, [
          '# Phoenix Code extension developer documentation',
          '> Official guides and API reference for developing Phoenix Code extensions and themes.',
          'These pages cover extending the editor. For using Phoenix Code to build a website, start with the user documentation index.',
        ].join('\n\n'));
        await fs.mkdir(path.join(outDir, 'api'), {recursive: true});
        await fs.writeFile(path.join(outDir, 'api', 'llms.txt'), apiIndex, 'utf8');
      }
      await fs.writeFile(path.join(outDir, 'llms.txt'), index, 'utf8');
      console.log(`[llms.txt] Indexed ${docs.length} user guides and ${apiDocs.length} developer pages.`);
    },
  };
};

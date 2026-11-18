const {test} = require('node:test');
const acorn = require('acorn');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const cheerio = require('cheerio');
const {extractDocSearchRecords, extractMarkdownRecords} = require('../config/search/records.cjs');
const {renderRecordExtractor, renderActions} = require('./search-crawler.cjs');

test('hosted callbacks use syntax accepted by the Crawler validator', () => {
  // The hosted validator rejects optional catch bindings even on a modern browser.
  assert.doesNotThrow(() => acorn.parse(`(${renderActions()})`, {ecmaVersion: 2018}));
});

function fixture(url, html, docRecords = []) {
  const $ = cheerio.load(html);
  const calls = [];
  return {
    $, url, calls,
    helpers: {
      docsearch(options) { calls.push(options); return docRecords; },
      markdown(selector) { return $(selector).text() + '\n' + $(selector).find('a').map((_, a) => $(a).attr('href')).get().join('\n'); },
      splitTextIntoRecords({text, baseRecord, ...options}) {
        calls.push(options);
        return [{...baseRecord, part: 0, text}];
      },
    },
  };
}

test('skips duplicate blog listings in both indices but retains articles', () => {
  for (const path of ['/blog', '/blog/', '/blog/archive', '/blog/tags', '/blog/tags/python', '/blog/page/2', '/search']) {
    const context = fixture(`https://docs.phcode.dev${path}`, '<main>duplicate</main>');
    assert.deepEqual(extractDocSearchRecords(context), []);
    assert.deepEqual(extractMarkdownRecords(context), []);
    assert.equal(context.calls.length, 0);
  }
  for (const path of ['/blog/release-5.5', '/blog/how-to-convert-png-to-pdf-free-online']) {
    const context = fixture(`https://docs.phcode.dev${path}`, '<main><h1>Article</h1><p>Original article</p></main>');
    assert.equal(extractMarkdownRecords(context)[0].category, 'Blog');
  }
});

test('section links select the edition without losing encoded paths, unrelated query parameters or fragments', () => {
  const url = 'https://docs.phcode.dev/docs/A%20Guide?lang=en#copy-your-picture';
  const context = fixture('https://docs.phcode.dev/docs/A%20Guide', '<main><h3 id="copy-your-picture" data-search-params="edition=community">Copy your picture</h3></main>', [
    {url, url_without_anchor: 'https://docs.phcode.dev/docs/A%20Guide', anchor: 'copy-your-picture', weight: {level: 3}},
  ]);
  const [record] = extractDocSearchRecords(context);
  assert.equal(record.url, 'https://docs.phcode.dev/docs/A%20Guide?lang=en&edition=community#copy-your-picture');
  assert.equal(record.url_without_anchor, 'https://docs.phcode.dev/docs/A%20Guide?lang=en&edition=community');
  assert.equal(record.edition, 'community');
  assert.deepEqual(record.weight, {level: 3});
});

test('OS and sharing tabs use their own query keys; API and blog classification stays distinct', () => {
  for (const [path, parameters, category] of [
    ['/docs/tutorials/run-python', 'system=macos', 'Documentation'],
    ['/docs/tutorials/share-website', 'share=zip', 'Documentation'],
    ['/api/API-Reference/command/CommandManager', 'system=linux', 'API'],
  ]) {
    const url = `https://docs.phcode.dev${path}`;
    const context = fixture(url, `<main><h3 id="steps" data-search-params="${parameters}">Steps</h3></main>`, [{url: `${url}#steps`}]);
    const [record] = extractDocSearchRecords(context);
    assert.equal(record.url, `${url}?${parameters}#steps`);
    assert.equal(record.category, category);
    assert.equal(record.edition, 'unspecified');
  }
});

test('Pro availability survives every AI chunk and absence of a marker does not imply free availability', () => {
  const pro = fixture('https://docs.phcode.dev/docs/Pro%20Features/layers-panel', '<main><h1>Layers Panel</h1><p>Use Layers.</p></main>');
  pro.helpers.splitTextIntoRecords = ({baseRecord}) => [{...baseRecord, text: 'First chunk'}, {...baseRecord, text: 'Second chunk'}];
  for (const record of extractMarkdownRecords(pro)) {
    assert.equal(record.edition, 'pro');
    assert.deepEqual(record.editions, ['pro']);
    assert.match(record.text, /^Edition availability: Phoenix Pro only\./);
    assert.match(record.url, /Pro%20Features/);
  }
  const unknown = fixture('https://docs.phcode.dev/docs/a-guide', '<main><h1>A guide</h1><p>Some steps.</p></main>');
  assert.equal(extractMarkdownRecords(unknown)[0].edition, 'unspecified');
});

test('AI context labels each edition, supplies exact links and restores the source DOM', () => {
  const context = fixture('https://docs.phcode.dev/docs/tutorials/add-images', '<main><h1>Add an image</h1><h3 id="gallery" data-search-params="edition=pro">Open gallery</h3><p>Use Gallery.</p><h3 id="copy" data-search-params="edition=community">Copy picture</h3><p>Write HTML.</p></main>');
  const original = context.$.html();
  const [record] = extractMarkdownRecords(context);
  assert.equal(record.edition, 'mixed');
  assert.deepEqual(record.editions, ['pro', 'community']);
  assert.match(record.text, /\[Phoenix Pro\] Open gallery/);
  assert.match(record.text, /\[Community \(free\)\] Copy picture/);
  assert.match(record.text, /\?edition=community#copy/);
  assert.equal(record.editionSections[1].url, 'https://docs.phcode.dev/docs/tutorials/add-images?edition=community#copy');
  assert.equal(context.$.html(), original);
});

test('server-rendered tabs retain workflow boundaries even without headings or ARIA IDs', () => {
  const context = fixture('https://docs.phcode.dev/docs/guide', `<main><article><h1>Guide</h1>
    <div class="theme-tabs-container"><ul role="tablist">
      <li role="tab">Phoenix Pro</li><li role="tab">Community (free)</li>
    </ul><div><div role="tabpanel"><ol><li>Maximize the preview.</li><li>Enable Edit Mode.</li></ol></div>
      <div role="tabpanel" hidden><ol><li>Restore the editor.</li><li>Edit the code.</li></ol></div>
    </div></div><p>Check the result.</p></article></main>`);
  const original = context.$.html();
  const [record] = extractMarkdownRecords(context);
  assert.equal(record.edition, 'mixed');
  assert.deepEqual(record.editions, ['pro', 'community']);
  assert.match(record.text, /\[Start of tab: Phoenix Pro\]Maximize the preview\.Enable Edit Mode\.\[End of tab: Phoenix Pro\]/);
  assert.match(record.text, /\[Start of tab: Community \(free\)\]Restore the editor\.Edit the code\.\[End of tab: Community \(free\)\]/);
  assert.ok(record.text.indexOf('Check the result.') > record.text.indexOf('[End of tab: Community (free)]'));
  assert.deepEqual(record.editionSections, []); // Do not invent section anchors.
  assert.equal(context.$.html(), original);
});

test('nested tabs keep their own labels and malformed tab groups are not guessed', () => {
  const context = fixture('https://docs.phcode.dev/docs/guide', `<main><h1>Guide</h1>
    <div class="theme-tabs-container"><ul role="tablist"><li role="tab">Windows</li><li role="tab">macOS</li></ul><div>
      <div role="tabpanel">Windows setup.<div class="theme-tabs-container"><ul role="tablist"><li role="tab">Phoenix Pro</li><li role="tab">Community</li></ul><div>
        <div role="tabpanel">Visual steps.</div><div role="tabpanel">Code steps.</div>
      </div></div></div><div role="tabpanel">Mac setup.</div>
    </div></div>
    <div class="theme-tabs-container"><ul role="tablist"><li role="tab">Unmatched label</li></ul><div>
      <div role="tabpanel">Unknown one.</div><div role="tabpanel">Unknown two.</div>
    </div></div></main>`);
  const original = context.$.html();
  const [record] = extractMarkdownRecords(context);
  assert.match(record.text, /\[Start of tab: Windows\]Windows setup\./);
  assert.match(record.text, /\[Start of tab: Phoenix Pro\]Visual steps\.\[End of tab: Phoenix Pro\]/);
  assert.match(record.text, /\[End of tab: Community\].*\[End of tab: Windows\]/s);
  assert.match(record.text, /\[Start of tab: macOS\]Mac setup\.\[End of tab: macOS\]/);
  assert.doesNotMatch(record.text, /\[(?:Start|End) of tab: Unmatched label\]/);
  assert.match(record.text, /Unknown one\.Unknown two\./);
  assert.equal(context.$.html(), original);
});

test('introductory Pro notices and explicit metadata establish availability outside legacy URL paths', () => {
  const notice = '<div class="theme-admonition"><div>Pro Feature</div><div><p>Upgrade to access this feature.</p></div></div>';
  const pro = fixture('https://docs.phcode.dev/docs/layers-panel', `<main><article><h1>Layers</h1>${notice}<h2>Open Layers</h2></article></main>`);
  assert.equal(extractMarkdownRecords(pro)[0].edition, 'pro');
  const meta = fixture('https://docs.phcode.dev/docs/new-feature', '<meta name="docsearch:edition" content="pro"><main><h1>A Pro feature</h1></main>');
  assert.equal(extractMarkdownRecords(meta)[0].edition, 'pro');
  const mixed = fixture('https://docs.phcode.dev/docs/tutorials/example', `<main><h1>Both editions</h1><div role="tabpanel">${notice}<h3 id="visual" data-search-params="edition=pro">Visual steps</h3></div><div role="tabpanel"><h3 id="code" data-search-params="edition=community">Code steps</h3></div></main>`);
  assert.equal(extractMarkdownRecords(mixed)[0].edition, 'mixed');
  const later = fixture('https://docs.phcode.dev/docs/example', `<main><h1>A guide</h1><h2>Optional Pro feature</h2>${notice}</main>`);
  assert.equal(extractMarkdownRecords(later)[0].edition, 'unspecified');
});

test('source DOM is restored even when Markdown conversion fails', () => {
  const context = fixture('https://docs.phcode.dev/docs/guide', '<main><h3 id="a" data-search-params="edition=pro">A</h3><div class="theme-tabs-container"><ul role="tablist"><li role="tab">Phoenix Pro</li></ul><div><div role="tabpanel">Steps</div></div></div><a href="/gallery.png"><img src="data:image/png;base64,AAAA" alt="Gallery"></a><img src="data:image/png;base64,BBBB" alt="Unlinked image"><a href="data:image/png;base64,CCCC">Inline file</a></main>');
  const original = context.$.html();
  context.helpers.markdown = () => { throw new Error('conversion failed'); };
  assert.throws(() => extractMarkdownRecords(context), /conversion failed/);
  assert.equal(context.$.html(), original);
});

test('AI images use the page\'s full-size URL instead of embedded binary data', () => {
  const context = fixture('https://docs.phcode.dev/docs/guide', '<main><h1>Guide</h1><a href="/assets/files/Photo%20One.png?edition=pro"><img src="data:image/png;base64,AAAA" alt="Image Gallery"></a><img src="blob:local" data-src="https://cdn.example.test/menu.webp" alt="Menu"><img src="/already-hosted.png" alt="Existing"><img data-src="/lazy.png" alt="Lazy image"></main>');
  const original = context.$.html();
  context.helpers.markdown = selector => context.$(selector).find('img').map((_, image) =>
    `![${context.$(image).attr('alt')}](${context.$(image).attr('src')})`).get().join('\n');
  const [record] = extractMarkdownRecords(context);
  assert.match(record.text, /!\[Image Gallery\]\(https:\/\/docs\.phcode\.dev\/assets\/files\/Photo%20One\.png\?edition=pro\)/);
  assert.match(record.text, /!\[Menu\]\(https:\/\/cdn\.example\.test\/menu\.webp\)/);
  assert.match(record.text, /!\[Existing\]\(https:\/\/docs\.phcode\.dev\/already-hosted\.png\)/);
  assert.match(record.text, /!\[Lazy image\]\(https:\/\/docs\.phcode\.dev\/lazy\.png\)/);
  assert.doesNotMatch(record.text, /data:|blob:/);
  assert.equal(context.$.html(), original);
});

test('AI extraction keeps descriptions when inline images have no usable source URL', () => {
  for (const href of ['data:image/png;base64,BBBB', 'javascript:alert(1)', '/docs/unrelated-page', 'https://example.test/page']) {
    const context = fixture('https://docs.phcode.dev/docs/guide', `<main><h1>Guide</h1><a href="${href}"><img src="data:image/png;base64,AAAA" alt="Control description"></a></main>`);
    const original = context.$.html();
    context.helpers.markdown = selector => context.$(selector).html();
    const [record] = extractMarkdownRecords(context);
    assert.match(record.text, /Control description/);
    assert.doesNotMatch(record.text, /data:image|<img/);
    assert.equal(context.$.html(), original);
  }
});

test('generated hosted actions run without CommonJS imports or closure dependencies', () => {
  const actions = vm.runInNewContext(`(${renderActions()})`, {URL, URLSearchParams});
  assert.deepEqual(Array.from(actions, action => action.indexName), ['phcode', 'markdown-index']);
  for (const [format, expected] of [['docsearch', 'Community'], ['markdown', 'Community']]) {
    const fn = vm.runInNewContext(`(${renderRecordExtractor(format)})`, {URL, URLSearchParams});
    const url = 'https://docs.phcode.dev/docs/guide';
    const context = fixture(url, '<main><h1>Community</h1><h3 id="a" data-search-params="edition=community">A</h3><p>HTML</p></main>', [{url: `${url}#a`, hierarchy: {lvl1: expected}}]);
    const records = fn(context);
    assert.equal(records.length, 1);
    assert.equal(records[0].edition, 'community');
  }
  assert.throws(() => renderRecordExtractor('unsupported'), /Unknown format/);
});

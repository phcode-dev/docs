const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const {pathToFileURL} = require('node:url');
const vm = require('node:vm');
const {test} = require('node:test');
const {load} = require('cheerio');

const root = path.resolve(__dirname, '..');
const vendorRoot = path.join(root, 'vendor/docsearch-react');
const entry = require.resolve('@docsearch/react');
const esmDirectory = path.dirname(entry);
const packageRoot = path.resolve(esmDirectory, '../..');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

test('all DocSearch integrations use the integrity-locked package and the same React', () => {
  const application = readJson(path.join(root, 'package.json'));
  const expected = readJson(path.join(vendorRoot, 'package.json'));
  const installed = readJson(path.join(packageRoot, 'package.json'));
  assert.equal(installed.version, expected.version);

  const packageSpec = application.dependencies['@docsearch/react'];
  assert.ok(packageSpec.startsWith('file:'), 'the reviewed artifact must be used');
  const artifact = fs.readFileSync(path.resolve(root, packageSpec.slice(5)));
  const integrity = `sha512-${crypto.createHash('sha512').update(artifact).digest('base64')}`;
  const lock = readJson(path.join(root, 'package-lock.json'));
  assert.equal(lock.packages['node_modules/@docsearch/react'].integrity, integrity);

  for (const integration of [
    '@docsearch/docusaurus-adapter',
    '@docsearch/modal',
    '@docsearch/sidepanel',
    '@docusaurus/theme-search-algolia',
  ]) {
    const resolveFromIntegration = createRequire(require.resolve(integration));
    assert.equal(resolveFromIntegration.resolve('@docsearch/react'), entry, integration);
    assert.equal(resolveFromIntegration.resolve('react'), require.resolve('react'), integration);
  }
  assert.equal(createRequire(entry).resolve('react'), require.resolve('react'));
  assert.equal(createRequire(entry).resolve('react-dom'), require.resolve('react-dom'));
});

test('the installed artifact contains the reviewed source fixes', () => {
  const expectedFiles = [
    'src/utils/sanitize.ts',
    'src/Sidepanel/Sidepanel.tsx',
    'src/Sidepanel/SidepanelHeader.tsx',
    'src/version.ts',
  ];
  const found = new Set();
  for (const filename of fs.readdirSync(esmDirectory).filter((name) => name.endsWith('.js.map'))) {
    const map = readJson(path.join(esmDirectory, filename));
    for (const relative of expectedFiles) {
      const index = map.sources.findIndex((source) => source.endsWith(`/${relative}`));
      if (index < 0) continue;
      assert.equal(map.sourcesContent[index], fs.readFileSync(path.join(vendorRoot, relative), 'utf8'),
        `${relative}: rebuild the artifact after changing source`);
      found.add(relative);
    }
  }
  assert.deepEqual([...found].sort(), expectedFiles.sort());
});

function installedSanitizer() {
  // The sanitizer is intentionally not a public export. Execute its unchanged
  // compiled section in an isolated test context, without importing internals by
  // hashed filename, altering installed files, or duplicating the implementation.
  const marker = '// src/utils/sanitize.ts\n';
  const sections = [];
  for (const filename of fs.readdirSync(esmDirectory).filter((name) => name.endsWith('.js'))) {
    const code = fs.readFileSync(path.join(esmDirectory, filename), 'utf8');
    const start = code.indexOf(marker);
    if (start < 0) continue;
    const end = code.indexOf('\n// src/', start + marker.length);
    assert.ok(end > start, 'the compiled sanitizer section must have a boundary');
    sections.push(code.slice(start, end));
  }
  assert.equal(sections.length, 1, 'review the new bundle layout when upgrading DocSearch');
  return vm.runInNewContext(`${sections[0]}\n({sanitizeUrl, escapeHtml})`, {URL},
    {filename: 'installed-docsearch-sanitizer.js', timeout: 1000});
}

test('installed sanitizer preserves encoded URLs and retains unsafe-scheme blocking', () => {
  const {sanitizeUrl, escapeHtml} = installedSanitizer();
  for (const url of [
    'https://docs.phcode.dev/docs/Pro%20Features/styles-bar#text-color',
    'https://example.com/a%2Fb?q=red%26blue&label=two%20words#part%20one',
    'https://example.com/%E6%97%A5%E6%9C%AC?q=%2520',
    'https://example.com/%23section?path=%2Fdocs%2Fintro&query=a%3Db',
    'http://example.com/path',
    'mailto:docs@example.com?subject=Two%20words',
    '/docs/Pro%20Features/styles-bar#text-color',
    '#section', '?q=1', './relative',
  ]) assert.equal(sanitizeUrl(url), url, url);

  // Includes the upstream security fixtures; preserving URLs must not remove
  // scheme checking or the decoding used to detect obfuscated unsafe schemes.
  for (const url of [
    'javascript:alert(1)', 'JAVASCRIPT:alert(1)',
    'data:text/html,<script>alert(1)</script>', 'vbscript:msgbox(1)',
    '//evil.example/path', 'java\tscript:alert(1)', 'java\nscript:alert(1)',
    'java\rscript:alert(1)', 'java script:alert(1)', 'java\u0000script:alert(1)',
    '%6Aavascript:alert(1)', '%6aavascript:alert(1)', 'java%09script:alert(1)',
    'java%0ascript:alert(1)', '%256Aavascript:alert(1)',
    '%25256Aavascript:alert(1)', '%2F%2Fevil.example/path',
  ]) assert.equal(sanitizeUrl(url), '', url);
  assert.equal(escapeHtml('<a href="x">&</a>'), '&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;');
});

test('installed Sidepanel exposes its visible translated heading as its dialog name', async () => {
  const React = require('react');
  const {renderToStaticMarkup} = require('react-dom/server');
  const {Sidepanel} = await import(pathToFileURL(require.resolve('@docsearch/react/sidepanelPanel')));
  // No browser effects or requests run during this render. The client-only
  // attribution link needs hostname, so supply only that browser fixture.
  const previousWindow = globalThis.window;
  globalThis.window = {location: {hostname: 'docs.example'}};
  let markup;
  try {
    markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
      ...['Ask Phoenix AI', 'Ask another assistant'].map((title) =>
        React.createElement(Sidepanel, {
          key: title, appId: 'test-app', apiKey: 'test-key', agentId: 'test-agent',
          isOpen: true, onOpen() {}, onClose() {}, translations: {header: {title}},
        }),
      ),
    ));
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
  const $ = load(markup);
  const dialogs = $('[role="dialog"]');
  assert.equal(dialogs.length, 2);
  const ids = new Set();
  dialogs.each((index, dialog) => {
    const id = $(dialog).attr('aria-labelledby');
    assert.ok(id, 'dialog must reference a heading');
    assert.ok(!ids.has(id), 'dialog names must use unique IDs');
    ids.add(id);
    const heading = $(dialog).find('h2').filter((_, element) => $(element).attr('id') === id);
    assert.equal(heading.length, 1);
    assert.equal(heading.text(), ['Ask Phoenix AI', 'Ask another assistant'][index]);
  });
});

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {test} = require('node:test');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const {load} = require('cheerio');

const root = path.resolve(__dirname, '..');

// Compile the actual source under review, rather than duplicating its logic.
const compiled = ts.transpileModule(
  fs.readFileSync(path.join(root, 'src/utils/sanitize.ts'), 'utf8'),
  {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017}},
).outputText;
const moduleContext = {exports: {}, URL};
vm.runInNewContext(compiled, moduleContext, {filename: 'sanitize.js'});
const {sanitizeUrl, sanitizeUserInput, escapeHtml} = moduleContext.exports;

const markdownContext = {
  exports: {},
  require: (name) => name === './sanitize' ? moduleContext.exports : require(name),
};
vm.runInNewContext(ts.transpileModule(
  fs.readFileSync(path.join(root, 'src/utils/markdown.ts'), 'utf8'),
  {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017}},
).outputText, markdownContext, {filename: 'markdown.js'});
require('./markdown-cases.cjs')(markdownContext.exports.parseMarkdownToSafeHtml, 'source Markdown');

test('preserves safe encoded absolute URLs without changing their meaning', () => {
  const urls = [
    'https://docs.phcode.dev/docs/Pro%20Features/styles-bar#text-color',
    'https://docs.phcode.dev/docs/Features/Live%20Preview',
    'https://example.com/a%2Fb?q=red%26blue&label=two%20words#part%20one',
    'https://example.com/%E6%97%A5%E6%9C%AC?q=%2520',
    'https://example.com/%23section?path=%2Fdocs%2Fintro&query=a%3Db',
    'http://example.com/path',
    'mailto:docs@example.com?subject=Two%20words',
  ];
  for (const url of urls) assert.equal(sanitizeUrl(url), url, url);
  assert.equal(sanitizeUrl('  https://example.com/a%20b  '), 'https://example.com/a%20b');
});

test('preserves relative paths and fragments supported upstream', () => {
  for (const url of ['/docs/api', '#section', '?q=1', './relative',
    '/docs/Pro%20Features/styles-bar#text-color']) {
    assert.equal(sanitizeUrl(url), url);
  }
});

test('retains every unsafe-scheme fixture from upstream sanitizer tests', () => {
  const unsafe = [
    'javascript:alert(1)',
    'JAVASCRIPT:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'vbscript:msgbox(1)',
    '//evil.example/path',
    'java\tscript:alert(1)',
    'java\nscript:alert(1)',
    'java\rscript:alert(1)',
    'java script:alert(1)',
    'java\u0000script:alert(1)',
    '%6Aavascript:alert(1)',
    '%6aavascript:alert(1)',
    'java%09script:alert(1)',
    'java%0ascript:alert(1)',
    '%256Aavascript:alert(1)',
    '%25256Aavascript:alert(1)',
    '%2F%2Fevil.example/path',
  ];
  for (const url of unsafe) assert.equal(sanitizeUrl(url), '', url);
  for (const value of [null, undefined, '', '  ']) assert.equal(sanitizeUrl(value), '');
});

test('retains upstream HTML escaping', () => {
  assert.equal(escapeHtml(`<img src="x" onerror='alert(1)'>`),
    '&lt;img src=&quot;x&quot; onerror=&#039;alert(1)&#039;&gt;');
  assert.equal(sanitizeUserInput('<b>hello</b> & world'), 'hello &amp; world');
});

test('built Sidepanel has a visible translated accessible heading', async () => {
  const {Sidepanel} = await import('../dist/esm/sidepanelPanel.js');
  // Sidepanel is a client-only component. Its attribution link reads hostname
  // during render; SSR still lets us test the real markup without running effects.
  const previousWindow = globalThis.window;
  globalThis.window = {location: {hostname: 'docs.example'}};
  let markup;
  try {
    markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
      ...['Ask Phoenix AI', 'Ask another assistant'].map((title) =>
        React.createElement(Sidepanel, {
          key: title,
          appId: 'test-application',
          apiKey: 'test-public-key',
          agentId: 'test-agent',
          isOpen: true,
          onOpen() {},
          onClose() {},
          translations: {header: {title}},
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
    const headingId = $(dialog).attr('aria-labelledby');
    assert.ok(headingId, 'dialog must name its heading');
    assert.ok(!ids.has(headingId), 'each instance needs its own heading ID');
    ids.add(headingId);
    const headings = $(dialog).find('h2').filter((_, h) => $(h).attr('id') === headingId);
    assert.equal(headings.length, 1);
    assert.equal(headings.text(), ['Ask Phoenix AI', 'Ask another assistant'][index]);
  });
});

test('vendored production source differs only in the reviewed fixes and version', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'upstream-files.json')));
  const changed = [];
  for (const [relative, expected] of Object.entries(manifest.files)) {
    if (!relative.startsWith('src/') && !relative.startsWith('style/')) continue;
    const actual = crypto.createHash('sha256')
      .update(fs.readFileSync(path.join(root, relative))).digest('hex');
    if (actual !== expected) changed.push(relative);
  }
  assert.deepEqual(changed.sort(), [
    'src/Sidepanel/Sidepanel.tsx',
    'src/Sidepanel/SidepanelHeader.tsx',
    'src/utils/markdown.ts',
    'src/utils/sanitize.ts',
    'src/version.ts',
  ]);
});

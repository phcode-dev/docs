const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const {verify} = require('./verify-links.cjs');

function fixture(t, files) {
  const build = fs.mkdtempSync(path.join(os.tmpdir(), 'phcode-links-'));
  t.after(() => fs.rmSync(build, {recursive: true, force: true}));
  for (const [name, content] of Object.entries(files)) {
    const file = path.join(build, name);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, content);
  }
  return build;
}

test('accepts clean URLs, encoded paths, relative downloads, queries and redirect aliases', t => {
  const build = fixture(t, {
    'index.html': '<a href="https://docs.phcode.dev/docs/A%20Guide?edition=community#steps">Guide</a>' +
      '<a href="/docs/legacy/">Old address</a><a href="/docs/legacy">Old address without slash</a>' +
      '<a href="//docs.phcode.dev/docs/A%20Guide">Guide</a>',
    'docs/A Guide.html': '<a href="../downloads/project.zip">Download</a>' +
      '<a href="#steps">Steps</a><h2 id="steps">Steps</h2>',
    'docs/legacy/index.html': '<link rel="canonical" href="/docs/A%20Guide">' +
      '<meta http-equiv="refresh" content="0; url=/docs/A%20Guide">',
    'downloads/project.zip': 'fixture',
  });
  assert.match(verify(build), /^PASS: 3 HTML files/);
});

test('catches the absolute Editor Rulers URL in a rendered blog post', t => {
  const build = fixture(t, {
    'index.html': '<a href="/blog/release-3.6">Release</a>',
    'blog/release-3.6.html': '<a href="https://docs.phcode.dev/docs/Features/editor-rulers/">Read more</a>',
  });
  assert.throws(() => verify(build),
    /blog\/release-3\.6\.html -> https:\/\/docs\.phcode\.dev\/docs\/Features\/editor-rulers\//);
});

test('reports missing media, canonical pages and redirect destinations together', t => {
  const build = fixture(t, {
    'index.html': '<link rel="canonical" href="/missing-page">' +
      '<video poster="/missing-poster.png"><source src="/missing-video.mp4">' +
      '<track src="/missing-captions.vtt"></video>' +
      '<meta http-equiv="Refresh" content="0; URL=/missing-redirect">',
  });
  assert.throws(() => verify(build), error => {
    for (const target of ['missing-page', 'missing-poster.png', 'missing-video.mp4',
      'missing-captions.vtt', 'missing-redirect']) assert(error.message.includes(target));
    return true;
  });
});

test('does not contact external sites or reject non-HTTP links', t => {
  const build = fixture(t, {
    'index.html': '<a href="https://external.invalid/missing">External</a>' +
      '<a href="mailto:help@example.invalid">Email</a><a href="tel:123">Call</a>' +
      '<img src="data:image/svg+xml;base64,AAAA"><a href="#">Top</a>',
  });
  assert.match(verify(build), /^PASS:/);
});

test('rejects malformed paths and does not confuse a file with its trailing-slash URL', t => {
  const build = fixture(t, {
    'index.html': '<a href="/guide/">Missing directory index</a><a href="/bad%ZZ">Invalid escape</a>',
    'guide.html': '<h1>Guide</h1>',
  });
  assert.throws(() => verify(build), error =>
    error.message.includes('/guide/') && error.message.includes('/bad%ZZ'));
});

test('resolves relative references against an HTML base URL', t => {
  const build = fixture(t, {
    'index.html': '<base href="/docs/"><a href="guide">Guide</a>',
    'docs/guide.html': '<h1>Guide</h1>',
  });
  assert.match(verify(build), /^PASS:/);
});

test('CLI fails the build for broken references or an incomplete build directory', t => {
  const build = fixture(t, {'index.html': '<a href="/missing">Broken</a>'});
  const script = path.join(__dirname, 'verify-links.cjs');
  const env = {...process.env};
  delete env.NODE_TEST_CONTEXT;
  const result = spawnSync(process.execPath, [script, '--build-dir', build], {encoding: 'utf8', env});
  assert.ifError(result.error);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /index\.html -> \/missing/);
  fs.unlinkSync(path.join(build, 'index.html'));
  assert.throws(() => verify(build), /build the website first/);
});

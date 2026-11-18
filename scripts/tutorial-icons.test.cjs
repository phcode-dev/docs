const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const cheerio = require('cheerio');
const plugin = require('../plugins/tutorial-icons');
const icons = require('../src/components/TutorialIcon/icons');
const sources = require('../src/components/TutorialIcon/sources.json');

test('exported icons retain the actual control shape, intrinsic size and theme support', () => {
  assert.deepEqual(Object.keys(icons).sort(), Object.keys(sources.icons).sort());
  const $ = cheerio.load(plugin.renderIcon('preview'), {xmlMode: true});
  assert.equal($('svg').attr('viewBox'), '-8.5 7.5 24 24');
  assert.equal($('polygon').attr('points'), '6.5 18.5 .5 14.5 -7.5 24.5 .5 19.5 6.5 23.5 14.5 13.5');
  assert.equal($('svg').attr('width'), '20');
  assert.equal($('svg').attr('height'), '20');
  assert.match($('style').text(), /prefers-color-scheme:dark/);
  assert.equal($('script,foreignObject,image,use').length, 0);
  assert.match(plugin.renderIcon('pen', true), /#a85b00.*#f8a949/);
  assert.throws(() => plugin.renderIcon('not-a-control'), /Unknown tutorial icon/);
});

test('production build exports every control and its attribution without changing source files', async () => {
  const outDir = await fs.mkdtemp(path.join(os.tmpdir(), 'phcode-icons-'));
  try {
    await plugin().postBuild({outDir});
    const directory = path.join(outDir, 'img/tutorial-icons');
    for (const name of Object.keys(icons)) {
      for (const active of [false, true]) {
        const xml = await fs.readFile(path.join(directory, `${name}${active ? '-active' : ''}.svg`), 'utf8');
        assert.equal(cheerio.load(xml, {xmlMode: true})('svg').length, 1);
      }
    }
    const attribution = JSON.parse(await fs.readFile(path.join(directory, 'sources.json'), 'utf8'));
    assert.deepEqual(attribution, sources);
    for (const file of ['LICENSE-FONT-AWESOME.txt', 'LICENSE-BOOTSTRAP-ICONS.txt']) {
      assert.ok((await fs.readFile(path.join(directory, file), 'utf8')).length > 100);
    }
  } finally {
    await fs.rm(outDir, {recursive: true, force: true});
  }
});

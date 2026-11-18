const assert = require('node:assert/strict');
const {test} = require('node:test');
const {load} = require('cheerio');

// Run the same behavior cases against source and the installed compiled package.
module.exports = function testMarkdownRenderer(parse, prefix) {
  test(`${prefix}: standalone and linked screenshots retain encoded URLs and descriptions`, () => {
    const image = 'https://docs.phcode.dev/images/Photo%20One.png?size=2&edition=pro';
    const fullSize = 'https://docs.phcode.dev/files/Photo%20One.png';
    const $ = load(parse(`![Standalone](${image})\n\n[![Image Gallery](${image} "Choose a file")](${fullSize} "Full size")`));
    assert.equal($('img').length, 2);
    assert.equal($('a img').attr('src'), image);
    assert.equal($('a img').attr('alt'), 'Image Gallery');
    assert.equal($('a img').attr('title'), 'Choose a file');
    assert.equal($('a').attr('href'), fullSize);
    assert.equal($('a').attr('title'), 'Full size');
    assert.equal($('a').attr('target'), '_blank');
    assert.equal($('a').attr('rel'), 'noopener noreferrer');
  });

  test(`${prefix}: formatted link labels render while embedded HTML stays text`, () => {
    const $ = load(parse('[**Read** the `src` field and *save* <img src=x onerror=alert(1)>](/guide "A & B")'));
    assert.equal($('a strong').text(), 'Read');
    assert.equal($('a code').text(), 'src');
    assert.equal($('a em').text(), 'save');
    assert.equal($('a').attr('title'), 'A & B');
    assert.equal($('img, script, iframe, [onerror]').length, 0);
    assert.match($('a').text(), /<img src=x onerror=alert\(1\)>/);
  });

  test(`${prefix}: nested images cannot bypass unsafe URL or attribute checks`, () => {
    const safe = 'https://docs.phcode.dev/photo.png';
    for (const unsafe of ['javascript:alert', '%6Aavascript:alert', 'data:text/html,evil', '//evil.example/image.png']) {
      const outer = load(parse(`[![Description](${safe})](${unsafe})`));
      assert.equal(outer('a').length, 0, unsafe);
      assert.equal(outer('img').attr('src'), safe);
      const inner = load(parse(`[![Description](${unsafe})](${safe})`));
      assert.equal(inner('img').length, 0, unsafe);
      assert.equal(inner('a').text(), 'Description');
    }
    const $ = load(parse(`[![A " onerror="alert(1) <svg>](${safe} '" onerror="alert(1)')](${safe} '" onclick="alert(1)')`));
    assert.equal($('[onerror], [onclick], svg').length, 0);
    assert.equal($('a img').length, 1);
    assert.match($('img').attr('alt'), /onerror/);
  });

  test(`${prefix}: partially streamed linked images remain safe and complete normally`, () => {
    const markdown = '[![Gallery](https://docs.phcode.dev/image.png)](https://docs.phcode.dev/full.png)';
    for (let length = 1; length <= markdown.length; length++) {
      const $ = load(parse(markdown.slice(0, length)));
      assert.equal($('script, iframe, [onerror], [onclick]').length, 0);
    }
    assert.equal(load(parse(markdown))('a img').length, 1);
  });
};

#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const cheerio = require('cheerio');
const {addTabQueryToRecordUrl} = require('../plugins/search-tabs/record-url');

function verifySearchBuild(buildDirectory = path.resolve(__dirname, '../build')) {
  const readPage = (relative) => cheerio.load(fs.readFileSync(path.join(buildDirectory, relative), 'utf8'));
  const search = readPage('search.html');
  const robots = search('meta[name="robots"]').attr('content') || '';
  assert.ok(robots.split(/[,\s]+/).includes('noindex'), 'Search results must emit a valid robots noindex tag in initial HTML');
  assert.equal(search('meta[property="robots"]').length, 0, 'Robots instructions use name, not property');

  const sections = [
    ['docs/tutorials/add-images.html', 'copy-your-picture', 'community'],
    ['docs/tutorials/image-text-layout.html', 'add-four-css-settings', 'community'],
    ['docs/tutorials/image-text-layout.html', 'set-the-layout', 'pro'],
  ];
  for (const [file, anchor, edition] of sections) {
    const $ = readPage(file);
    const heading = $('[id]').filter((_, element) => $(element).attr('id') === anchor);
    assert.equal(heading.length, 1, `${file}: expected one heading for ${anchor}`);
    const parameters = heading.attr('data-search-params');
    assert.equal(new URLSearchParams(parameters).get('edition'), edition,
      `${file}#${anchor}: missing tab metadata in built HTML`);
    const pageUrl = `https://docs.phcode.dev/${file.replace(/\.html$/, '')}`;
    const result = new URL(addTabQueryToRecordUrl(`${pageUrl}#${anchor}`, {[anchor]: parameters}));
    assert.equal(result.searchParams.get('edition'), edition, 'Search result must select the target edition');
    assert.equal(result.hash, `#${anchor}`, 'Search result must keep its target section');
  }
  const tutorial = readPage('docs/tutorials/add-images.html');
  const inlineIcons = tutorial('svg[data-tutorial-icon-src]');
  assert.ok(inlineIcons.length > 0, 'Tutorial control icons need published image URLs for Ask AI');
  inlineIcons.each((_, element) => {
    const url = tutorial(element).attr('data-tutorial-icon-src');
    assert.match(url, /^\/img\/tutorial-icons\/[a-zA-Z][a-zA-Z0-9-]*\.svg$/);
    const xml = fs.readFileSync(path.join(buildDirectory, url.slice(1)), 'utf8');
    const $ = cheerio.load(xml, {xmlMode: true});
    assert.equal($('svg').attr('viewBox'), tutorial(element).attr('viewBox'), `${url}: control geometry must match the article`);
    assert.equal($('svg').attr('width'), '20', `${url}: icons must have an intrinsic inline size`);
  });
  console.log('Search release checks passed: robots, edition links, and published control icons.');
}

if (require.main === module) verifySearchBuild(process.argv[2]);
module.exports = {verifySearchBuild};

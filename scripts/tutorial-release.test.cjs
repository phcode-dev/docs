const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const {execFileSync} = require('node:child_process');
const {restorePublications} = require('./prepare-tutorial-publications.cjs');
const {PUBLICATIONS_PATH, addPublicationDates, validatePublications} = require('../plugins/tutorial-media/publications');
const tutorialMedia = require('../plugins/tutorial-media');
const llmsTxt = require('../plugins/llms-txt');

const pro = '/tutorials/media/pro-add-image-complete.mp4';
const community = '/tutorials/media/community-add-image.mp4';
const firstDate = '2026-11-10T10:00:00.000Z';
const laterDate = '2026-12-10T10:00:00.000Z';

function git(cwd, ...args) {
  return execFileSync('git', args, {cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']});
}

async function fixture(t, publishedFiles = {}) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'phcode-release-test-'));
  t.after(() => fs.rm(root, {recursive: true, force: true}));
  const siteDir = path.join(root, 'site');
  const remote = path.join(root, 'remote');
  await fs.mkdir(siteDir);
  await fs.mkdir(remote);
  git(remote, 'init', '-b', 'gh-pages');
  for (const [file, data] of Object.entries(publishedFiles)) {
    await fs.mkdir(path.dirname(path.join(remote, file)), {recursive: true});
    await fs.writeFile(path.join(remote, file), data);
  }
  if (Object.keys(publishedFiles).length) {
    git(remote, 'add', '.');
    git(remote, '-c', 'user.name=Tutorial release test', '-c', 'user.email=test@example.invalid', 'commit', '-m', 'Published fixture');
  }
  git(siteDir, 'init', '-b', 'main');
  git(siteDir, 'remote', 'add', 'origin', remote);
  await fs.mkdir(path.join(siteDir, 'scripts'));
  await fs.writeFile(path.join(siteDir, 'scripts/tutorial-media-manifest.json'), JSON.stringify({
    recordings: [pro, community].map(source => ({file: 'static' + source})),
  }));
  for (const source of [pro, community]) {
    const file = path.join(siteDir, 'static', source);
    await fs.mkdir(path.dirname(file), {recursive: true});
    await fs.writeFile(file, 'Fixture: existence only; real media timing is verified after build.');
  }
  return {siteDir, remote, output: path.join(root, 'previous.json'), outDir: path.join(root, 'build')};
}

test('first deployment assigns publication dates and saves the same dates used by the page', async t => {
  const f = await fixture(t);
  assert.deepEqual(await restorePublications(f.siteDir, f.output), {version: 1, videos: {}});
  const plugin = tutorialMedia({siteDir: f.siteDir}, {publish: true, publicationsFile: f.output});
  const before = Date.now();
  const content = await plugin.loadContent();
  for (const source of [pro, community]) {
    assert(Date.parse(content.videos[source]) >= before);
    assert(Date.parse(content.videos[source]) <= Date.now());
  }
  plugin.contentLoaded({content, actions: {setGlobalData(data) {assert.deepEqual(data.uploadDates, content.videos);}}});
  await plugin.postBuild({content, outDir: f.outDir});
  assert.deepEqual(JSON.parse(await fs.readFile(path.join(f.outDir, PUBLICATIONS_PATH), 'utf8')), content);
});

test('later deployments preserve original dates and date only newly introduced videos', async t => {
  const previous = {version: 1, videos: {[pro]: firstDate}};
  const f = await fixture(t, {[PUBLICATIONS_PATH]: JSON.stringify(previous), [pro.slice(1)]: 'Previously published video'});
  const restored = await restorePublications(f.siteDir, f.output);
  assert.deepEqual(restored, previous);
  const next = addPublicationDates(restored, [pro, community], laterDate);
  assert.equal(next.videos[pro], firstDate);
  assert.equal(next.videos[community], laterDate);
  assert.deepEqual(addPublicationDates(next, [pro, community], '2027-01-01T00:00:00.000Z'), next);
});

test('missing history for an already published video fails instead of resetting its date', async t => {
  const f = await fixture(t, {[pro.slice(1)]: 'Previously published video'});
  await assert.rejects(restorePublications(f.siteDir, f.output), /Missing original publication date/);
  await assert.rejects(fs.access(f.output));
});

test('an unavailable deployment repository fails without overwriting saved history', async t => {
  const f = await fixture(t);
  const saved = JSON.stringify({version: 1, videos: {[pro]: firstDate}});
  await fs.writeFile(f.output, saved);
  git(f.siteDir, 'remote', 'set-url', 'origin', path.join(f.siteDir, 'missing-remote'));
  await assert.rejects(restorePublications(f.siteDir, f.output), /Publication dates have not been reset/);
  assert.equal(await fs.readFile(f.output, 'utf8'), saved);
});

test('malformed deployment history and unexpected paths are rejected', () => {
  for (const value of [null, {}, {version: 1, videos: []},
    {version: 1, videos: {[pro]: 'not a date'}},
    {version: 1, videos: {'/private/video.mp4': firstDate}}]) {
    assert.throws(() => validatePublications(value));
  }
});

test('preview builds do not fabricate dates; publishing requires restored history', async t => {
  const f = await fixture(t);
  assert.deepEqual(await tutorialMedia({siteDir: f.siteDir}, {publish: false}).loadContent(), {version: 1, videos: {}});
  await assert.rejects(tutorialMedia({siteDir: f.siteDir}, {publish: true}).loadContent(), /PHCODE_VIDEO_PUBLICATIONS_FILE/);
});

test('AI index lists only built public pages from the latest version', async t => {
  const f = await fixture(t);
  await fs.mkdir(f.outDir);
  const doc = (name, extra = {}) => ({title: name, description: 'Guide', sourceDirName: '10-Tutorials', source: `@site/docs/${name}.md`, permalink: `/help/docs/${name}`, ...extra});
  const docs = [doc('public'), doc('public'), doc('draft', {draft: true}), doc('unlisted', {unlisted: true}), doc('noindex'), doc('missing')];
  const plugin = llmsTxt({siteConfig: {url: 'https://docs.phcode.dev', baseUrl: '/help/'}});
  plugin.allContentLoaded({allContent: {'docusaurus-plugin-content-docs': {default: {loadedVersions: [
    {isLast: false, docs: [doc('obsolete')]}, {isLast: true, docs},
  ]}}}});
  const routesBuildMetadata = Object.fromEntries(docs.filter(d => d.title !== 'missing').map(d => [d.permalink, {noIndex: d.title === 'noindex'}]));
  await plugin.postBuild({outDir: f.outDir, routesBuildMetadata});
  const index = await fs.readFile(path.join(f.outDir, 'llms.txt'), 'utf8');
  assert.equal((index.match(/^- \[/gm) || []).length, 1);
  assert(index.includes('https://docs.phcode.dev/help/docs/public'));
  assert.equal(plugin.injectHtmlTags().headTags[0].attributes.href, '/help/llms.txt');
});

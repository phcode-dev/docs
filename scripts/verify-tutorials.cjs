const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {parseArgs} = require('node:util');
const {load} = require('cheerio');
const {unzipSync} = require('fflate');
const robotsParser = require('robots-parser');
const {TUTORIALS, PROJECTS, projectFiles} = require('./package-tutorials.cjs');
const {PUBLICATIONS_PATH, validatePublications} = require('../plugins/tutorial-media/publications');

const SITE = path.join(__dirname, '..');
const ORIGIN = 'https://docs.phcode.dev';
const GUIDES = ['tutorials', 'tutorials/add-images', 'tutorials/link-pages',
  'tutorials/share-website', 'tutorials/bootstrap', 'tutorials/run-python',
  'tutorials/find-and-replace', 'tutorials/replace-in-files'];

function videoDuration(file) {
  const data = fs.readFileSync(file);
  function atoms(start, end) {
    const entries = [];
    while (start < end) {
      assert(start + 8 <= end, `Truncated MP4 atom: ${file}`);
      let size = data.readUInt32BE(start);
      const kind = data.toString('ascii', start + 4, start + 8);
      let headerSize = 8;
      if (size === 1) {
        assert(start + 16 <= end, `Truncated extended MP4 atom: ${file}`);
        size = Number(data.readBigUInt64BE(start + 8));
        headerSize = 16;
      } else if (size === 0) {
        size = end - start;
      }
      assert(Number.isSafeInteger(size) && size >= headerSize && start + size <= end, `Invalid MP4 atom: ${file}`);
      entries.push({kind, start, payload: start + headerSize, end: start + size});
      start += size;
    }
    return entries;
  }

  const top = atoms(0, data.length);
  const movie = top.find(atom => atom.kind === 'moov');
  const media = top.find(atom => atom.kind === 'mdat');
  assert(movie && media && movie.start < media.start, `MP4 is missing fast-start metadata: ${file}`);
  const header = atoms(movie.payload, movie.end).find(atom => atom.kind === 'mvhd');
  assert(header && header.payload < header.end, `Missing MP4 duration: ${file}`);
  const value = data.subarray(header.payload, header.end);
  assert(value[0] === 0 || value[0] === 1, `Unsupported MP4 timing version: ${file}`);
  const extended = value[0] === 1;
  assert(value.length >= (extended ? 32 : 20), `Truncated MP4 timing: ${file}`);
  const timescale = value.readUInt32BE(extended ? 20 : 12);
  const duration = extended ? Number(value.readBigUInt64BE(24)) : value.readUInt32BE(16);
  assert(timescale > 0 && duration > 0 && Number.isSafeInteger(duration), `Invalid MP4 duration: ${file}`);
  return duration / timescale;
}

function verify(build, release = false) {
  build = path.resolve(build);
  const pages = new Map();
  const robots = robotsParser(`${ORIGIN}/robots.txt`, fs.readFileSync(path.join(build, 'robots.txt'), 'utf8'));

  function page(file) {
    if (!pages.has(file)) pages.set(file, load(fs.readFileSync(file, 'utf8')));
    return pages.get(file);
  }

  function target(url, route = '/') {
    const absolute = new URL(url, ORIGIN + route);
    if (absolute.host !== 'docs.phcode.dev' || !['http:', 'https:'].includes(absolute.protocol)) return null;
    const relative = decodeURIComponent(absolute.pathname).replace(/^\/+/, '');
    const candidates = [`${relative.replace(/\/+$/, '')}.html`, relative, path.join(relative, 'index.html')]
      .map(name => path.resolve(build, name));
    const file = candidates.find(candidate => {
      const within = path.relative(build, candidate);
      return within !== '..' && !within.startsWith(`..${path.sep}`) && !path.isAbsolute(within) &&
        fs.existsSync(candidate) && fs.statSync(candidate).isFile();
    });
    assert(file, `Missing local target: ${absolute.href}`);
    assert(robots.isAllowed(absolute.href, 'Googlebot') === true, `Crawler blocked: ${absolute.href}`);
    if (absolute.hash && path.extname(file) === '.html') {
      const document = page(file);
      const ids = document('[id]').map((_, element) => document(element).attr('id')).get();
      assert(ids.includes(decodeURIComponent(absolute.hash.slice(1))), `Missing anchor: ${absolute.href}`);
    }
    return file;
  }

  const sitemap = load(fs.readFileSync(path.join(build, 'sitemap.xml'), 'utf8'), {xmlMode: true});
  const indexed = new Set(sitemap('loc').map((_, element) => sitemap(element).text()).get());
  for (const guide of GUIDES) {
    const route = '/docs/' + guide;
    const document = page(target(route));
    assert(indexed.has(ORIGIN + route), `Tutorial missing from sitemap: ${route}`);
    assert.equal(document('article h1').length, 1, `Expected one tutorial title: ${route}`);
    const canonicals = document('link[rel="canonical"]').map((_, element) => document(element).attr('href')).get();
    assert.deepEqual(canonicals, [ORIGIN + route], `Incorrect canonical URL: ${route}`);
    document('meta[name="robots"]').each((_, element) => {
      assert(!/noindex/i.test(document(element).attr('content') || ''), `Tutorial marked noindex: ${route}`);
    });
    document('article a, article img, article source, article track').each((_, element) => {
      const url = document(element).attr(element.tagName === 'a' ? 'href' : 'src');
      if (url) target(url, route);
    });
    document('article img').each((_, element) => {
      const image = document(element);
      assert(image.attr('alt') && image.attr('width') && image.attr('height'), `Incomplete image attributes: ${route}`);
    });
  }

  const imagePage = page(target('/docs/tutorials/add-images'));
  assert.equal(imagePage('article details').length, 5, 'Expected five image FAQs');
  const captures = JSON.parse(fs.readFileSync(path.join(SITE, 'scripts/tutorial-media-manifest.json'), 'utf8'));
  const publications = validatePublications(JSON.parse(fs.readFileSync(path.join(build, PUBLICATIONS_PATH), 'utf8'))).videos;
  const schemas = imagePage('script[type="application/ld+json"]').toArray()
    .map(element => JSON.parse(imagePage(element).text())).filter(schema => schema['@type'] === 'VideoObject');
  assert.equal(schemas.length, 2, 'Expected two video metadata entries');
  assert.equal(captures.recordings.length, 2, 'Expected two recorded videos');
  assert.equal(new Set(schemas.map(schema => schema.name)).size, 2, 'Video names must be distinct');
  const attributes = (selector, name) => new Set(imagePage(selector).map((_, element) => imagePage(element).attr(name)).get());
  const sources = attributes('article source', 'src');
  const posters = attributes('article video', 'poster');
  const tracks = attributes('article track', 'src');
  for (const schema of schemas) {
    const source = new URL(schema.contentUrl).pathname;
    assert(sources.has(source) && schema.description && schema.name, `Incomplete video metadata: ${source}`);
    assert(posters.has(new URL(schema.thumbnailUrl[0]).pathname), `Video poster mismatch: ${source}`);
    assert(tracks.has(new URL(schema.caption.contentUrl).pathname), `Video captions mismatch: ${source}`);
    for (const url of [schema.contentUrl, schema.thumbnailUrl[0], schema.caption.contentUrl]) target(url);
    const duration = videoDuration(target(source));
    const durationMatch = /^PT(\d+(?:\.\d+)?)S$/.exec(schema.duration);
    assert(durationMatch && Math.abs(Number(durationMatch[1]) - duration) < 0.02, `Incorrect duration: ${source}`);
    const captured = captures.recordings.find(record => '/' + record.file.replace(/^static\//, '') === source);
    assert(captured && Math.abs(captured.duration_seconds - duration) < 0.02, `Capture duration mismatch: ${source}`);
    assert.equal(schema.uploadDate, publications[source], `Publication date mismatch: ${source}`);
    if (release) assert(schema.uploadDate, `Release video has no first-publication date: ${source}`);
    const captions = fs.readFileSync(target(schema.caption.contentUrl), 'utf8').replace(/\r\n/g, '\n');
    assert(captions.startsWith('WEBVTT'), `Invalid caption format: ${source}`);
    const cues = [...captions.matchAll(/(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})\n([^\n]+)/g)];
    assert(cues.length, `Missing video captions: ${source}`);
    const seconds = stamp => {
      const [hours, minutes, value] = stamp.split(':').map(Number);
      return hours * 3600 + minutes * 60 + value;
    };
    let previousEnd = 0;
    for (const [, start, end] of cues) {
      assert(previousEnd <= seconds(start) && seconds(start) < seconds(end) && seconds(end) <= duration + 0.02,
        `Invalid caption timing: ${source} (${start} --> ${end})`);
      previousEnd = seconds(end);
    }
  }

  let indexLinks = 0;
  for (const filename of ['llms.txt', 'api/llms.txt']) {
    const index = fs.readFileSync(path.join(build, filename), 'utf8');
    const links = [...index.matchAll(/^- \[(?:\\.|[^\\\]])*\]\(([^)]+)\)/gm)].map(match => match[1]);
    assert(index.startsWith('# Phoenix Code') && links.length && links.length === new Set(links).size,
      `Invalid or duplicate AI-index entries: ${filename}`);
    for (const link of links) target(link);
    indexLinks += links.length;
  }
  for (const project of PROJECTS) {
    const files = projectFiles(path.join(TUTORIALS, project));
    const archive = unzipSync(fs.readFileSync(path.join(build, `tutorials/${project}.zip`)));
    assert.deepEqual(Object.keys(archive).sort(), Object.keys(files).map(name => `${project}/${name}`).sort(),
      `Stale practice ZIP: ${project}`);
    for (const [name, content] of Object.entries(files)) {
      assert(Buffer.from(archive[`${project}/${name}`]).equals(content), `Stale practice file: ${project}/${name}`);
    }
  }
  return `PASS: ${GUIDES.length} guides, local links and anchors, screenshots, 5 FAQs, 2 videos with captions, ${indexLinks} AI-index links, and both practice ZIPs.` +
    (release ? ' Release publication dates are complete.' : ' Preview metadata verified.');
}

if (require.main === module) {
  try {
    const {values} = parseArgs({options: {
      'build-dir': {type: 'string', default: path.join(SITE, 'build')},
      release: {type: 'boolean', default: false},
      help: {type: 'boolean', short: 'h'},
    }});
    console.log(values.help ? 'Usage: npm run verify:tutorials -- [--build-dir PATH] [--release]' :
      verify(values['build-dir'], values.release));
  } catch (error) {
    console.error(`FAIL: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {verify};

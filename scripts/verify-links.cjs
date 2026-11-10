const fs = require('node:fs');
const path = require('node:path');
const {parseArgs} = require('node:util');
const {load} = require('cheerio');

const SITE = path.join(__dirname, '..');
const SITE_URL = 'https://docs.phcode.dev';
const REFERENCES = [
  ['a[href], area[href], link[href]', 'href'],
  ['img[src], script[src], iframe[src], audio[src], video[src], source[src], track[src], embed[src]', 'src'],
  ['video[poster]', 'poster'],
  ['object[data]', 'data'],
];

function listFiles(directory, root = directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(file, root);
    return entry.isFile() ? [path.relative(root, file).split(path.sep).join('/')] : [];
  });
}

// Check the finished artifact, including the absolute production URLs that
// Docusaurus treats as external links. Never request the live website: new pages
// do not exist there yet, and an outage must not make a valid build fail.
function verify(buildDir, siteUrl = SITE_URL) {
  const build = path.resolve(buildDir);
  const origin = new URL(siteUrl);
  const files = new Set(listFiles(build));
  if (!files.has('index.html')) throw new Error('Missing index.html in ' + build + '; build the website first.');
  const htmlFiles = [...files].filter(file => file.endsWith('.html')).sort();
  const missing = new Set();
  const targets = new Map();
  let checked = 0;

  function check(href, base, source) {
    if (!href?.trim()) return;
    let url;
    try {
      url = new URL(href, base);
    } catch {
      missing.add(source + ' -> ' + href + ' (invalid URL)');
      return;
    }
    if (!['http:', 'https:'].includes(url.protocol) || url.host !== origin.host) return;
    checked++;
    if (!targets.has(url.pathname)) {
      let exists = false;
      try {
        const name = decodeURIComponent(url.pathname).slice(1);
        // GitHub Pages serves clean URLs from .html files, or directory indexes.
        // A trailing slash needs its own index (including client redirects).
        const candidates = name === '' ? ['index.html'] : name.endsWith('/')
          ? [name + 'index.html']
          : [name, name + '.html', name + '/index.html'];
        exists = candidates.some(candidate => files.has(candidate));
      } catch {
        // Malformed percent escapes must fail instead of skipping validation.
      }
      targets.set(url.pathname, exists);
    }
    if (!targets.get(url.pathname)) missing.add(source + ' -> ' + href);
  }

  for (const file of htmlFiles) {
    const document = load(fs.readFileSync(path.join(build, file), 'utf8'));
    const pageUrl = new URL('/' + file.split('/').map(encodeURIComponent).join('/'), origin);
    const baseHref = document('base[href]').first().attr('href');
    let base = pageUrl;
    if (baseHref) {
      try {
        base = new URL(baseHref, pageUrl);
      } catch {
        missing.add(file + ' -> ' + baseHref + ' (invalid base URL)');
      }
    }
    for (const [selector, attribute] of REFERENCES) {
      document(selector).each((_, element) => check(document(element).attr(attribute), base, file));
    }
    // Client redirects also need a real destination, even without an <a> tag.
    document('meta[http-equiv]').each((_, element) => {
      if (document(element).attr('http-equiv').toLowerCase() !== 'refresh') return;
      const content = document(element).attr('content') || '';
      const match = /^\s*[\d.]+\s*;\s*url\s*=\s*(.*?)\s*$/i.exec(content);
      if (match) check(match[1].replace(/^(['"])(.*)\1$/, '$2'), base, file);
    });
  }

  if (missing.size) {
    throw new Error('Found ' + missing.size + ' broken local reference(s):\n' +
      [...missing].sort().map(item => '  ' + item).join('\n') +
      '\nFix the source link or add a redirect to an existing page, then rebuild.');
  }
  return 'PASS: ' + htmlFiles.length + ' HTML files and ' + checked + ' local references; all destinations exist.';
}

if (require.main === module) {
  try {
    const {values} = parseArgs({options: {
      'build-dir': {type: 'string', default: path.join(SITE, 'build')},
      'site-url': {type: 'string', default: SITE_URL},
      help: {type: 'boolean', short: 'h'},
    }});
    console.log(values.help ? 'Usage: npm run verify:links -- [--build-dir PATH] [--site-url URL]' :
      verify(values['build-dir'], values['site-url']));
  } catch (error) {
    console.error('FAIL: ' + error.message);
    process.exitCode = 1;
  }
}

module.exports = {verify};

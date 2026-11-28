const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require(process.env.TABLE_BROWSER_MODULE || '../.qa-runtime/node_modules/playwright-core');

const root = path.resolve(__dirname, '..');

function extract(archive, destination) {
  switch (process.platform) {
    case 'win32':
      execFileSync('pwsh.exe', [
        '-NoProfile', '-NonInteractive', '-Command',
        'Expand-Archive -LiteralPath $env:TABLE_ZIP -DestinationPath $env:TABLE_DESTINATION -ErrorAction Stop'
      ], {env: {...process.env, TABLE_ZIP: archive, TABLE_DESTINATION: destination}});
      break;
    case 'darwin':
      execFileSync('ditto', ['-x', '-k', archive, destination]);
      break;
    default:
      execFileSync('unzip', ['-q', archive, '-d', destination]);
  }
}

async function readSamples() {
  const article = await fs.readFile(path.join(root, 'docs/10-Tutorials/11-add-html-table.md'), 'utf8');
  const normalized = article.replace(/\r\n/g, '\n');
  const blocks = [...normalized.matchAll(/^ {3}\x60{3}html\n([\s\S]*?)^ {3}\x60{3}$/gm)];
  assert.equal(blocks.length, 2);
  return blocks.map(match => match[1].trimEnd().split('\n').map(line => line.slice(3)).join('\n'));
}

async function checkTable(page, cells) {
  const table = page.getByRole('table', {name: 'Trail distances'});
  assert.equal(await table.count(), 1);
  assert.deepEqual(await table.getByRole('columnheader').allTextContents(), ['Trail', 'Distance']);
  assert.equal(await table.locator('th[scope="col"]').count(), 2);
  assert.deepEqual(await table.getByRole('cell').allTextContents(), cells);
  assert.equal(await table.locator('xpath=preceding-sibling::*[1]').evaluate(el => el.tagName), 'UL');
  assert.equal(await table.locator('xpath=following-sibling::*[1]').getAttribute('href'), 'contact.html');
}

async function verify(destination, browser) {
  extract(path.join(root, 'static/tutorials/first-website.zip'), destination);
  const project = path.join(destination, 'first-website');
  const about = path.join(project, 'about.html');
  const preserved = ['index.html', 'contact.html', 'styles.css', 'images/trail.svg'];
  const originals = await Promise.all(preserved.map(file => fs.readFile(path.join(project, file))));
  const [table, row] = await readSamples();
  const original = await fs.readFile(about, 'utf8');
  const page = await browser.newPage();
  await page.goto(pathToFileURL(about).href);
  assert.equal(await page.getByRole('heading', {level: 1}).innerText(), 'Small walks. Good stories.');
  assert.equal(await page.getByRole('listitem').count(), 3);
  assert.equal(await page.getByRole('table').count(), 0);

  assert.equal(original.match(/<\/ul>/g).length, 1);
  const initial = original.replace('</ul>', '</ul>\n' + table);
  await fs.writeFile(about, initial);
  await page.reload();
  await checkTable(page, ['Pine Loop', '2 km']);
  console.log('First save displays Pine Loop at 2 km between the list and Contact link.');

  const saved = await fs.readFile(about, 'utf8');
  const final = saved.replace('<td>2 km</td>', '<td>3 km</td>')
    .replace('</tbody>', row + '\n</tbody>');
  await fs.writeFile(about, final);
  await page.reload();
  await checkTable(page, ['Pine Loop', '3 km', 'Lake Walk', '4 km']);
  await page.getByRole('link', {name: 'Visit the contact page'}).click();
  assert.equal(await page.getByRole('heading', {level: 1}).innerText(), 'Keep in touch.');
  for (const [i, file] of preserved.entries()) {
    assert.deepEqual(await fs.readFile(path.join(project, file)), originals[i]);
  }
  console.log('Second save displays both updated rows and preserves the Contact link and other practice files.');
}

async function main() {
  const destination = await fs.mkdtemp(path.join(os.tmpdir(), 'trail-table-'));
  const browser = await chromium.launch({channel: 'chrome'});
  try {
    console.log(process.platform, process.arch, 'Chrome', browser.version());
    await verify(destination, browser);
  } finally {
    await browser.close();
    await fs.rm(destination, {recursive: true, force: true});
  }
}

main().catch(error => {console.error(error.stack); process.exitCode = 1;});

const fs = require('node:fs/promises');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const {PUBLICATIONS_PATH, validatePublications} = require('../plugins/tutorial-media/publications');

function git(cwd, args, allowed = [0]) {
  const result = spawnSync('git', args, {cwd, encoding: 'utf8'});
  if (result.error || !allowed.includes(result.status)) {
    throw new Error(`git ${args[0]} failed while reading deployment history. Publication dates have not been reset.`);
  }
  return result;
}

async function restorePublications(siteDir, outputFile) {
  const manifest = JSON.parse(await fs.readFile(path.join(siteDir, 'scripts/tutorial-media-manifest.json'), 'utf8'));
  let previous = {version: 1, videos: {}};
  const branch = git(siteDir, ['ls-remote', '--exit-code', '--heads', 'origin', 'refs/heads/gh-pages'], [0, 2]);
  if (branch.status === 0) {
    git(siteDir, ['fetch', '--quiet', '--no-tags', '--depth=1', 'origin', 'refs/heads/gh-pages']);
    const stored = git(siteDir, ['ls-tree', '--name-only', 'FETCH_HEAD', '--', PUBLICATIONS_PATH]).stdout.trim();
    if (stored) {
      previous = validatePublications(JSON.parse(git(siteDir, ['show', `FETCH_HEAD:${PUBLICATIONS_PATH}`]).stdout));
    }
    // If a video is already public, missing history needs repair. Never silently
    // replace its first-publication date with today's date.
    for (const recording of manifest.recordings) {
      const source = recording.file.slice('static'.length);
      const deployedPath = source.slice(1);
      const deployed = git(siteDir, ['ls-tree', '--name-only', 'FETCH_HEAD', '--', deployedPath]).stdout.trim();
      if (deployed && !previous.videos[source]) {
        throw new Error(`Missing original publication date for ${source}. Restore it in ${PUBLICATIONS_PATH} on gh-pages before releasing.`);
      }
    }
  }
  await fs.mkdir(path.dirname(path.resolve(outputFile)), {recursive: true});
  await fs.writeFile(outputFile, `${JSON.stringify(previous, null, 2)}\n`, 'utf8');
  return previous;
}

if (require.main === module) {
  const output = process.env.PHCODE_VIDEO_PUBLICATIONS_FILE;
  if (!output) throw new Error('Set PHCODE_VIDEO_PUBLICATIONS_FILE to the temporary publication manifest path.');
  restorePublications(process.cwd(), output)
    .then(previous => console.log(`Restored ${Object.keys(previous.videos).length} video publication dates.`))
    .catch(error => {console.error(error.message); process.exitCode = 1;});
}

module.exports = {restorePublications};

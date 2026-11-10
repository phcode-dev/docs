const fs = require('node:fs/promises');
const path = require('node:path');
const {PUBLICATIONS_PATH, validatePublications, addPublicationDates} = require('./publications');

module.exports = function tutorialMediaPlugin({siteDir}, options) {
  const captureManifest = path.join(siteDir, 'scripts/tutorial-media-manifest.json');
  const previousFile = options.publicationsFile && path.resolve(siteDir, options.publicationsFile);
  return {
    name: 'phoenix-tutorial-media',
    getPathsToWatch() {
      return [captureManifest, ...(previousFile ? [previousFile] : [])];
    },
    async loadContent() {
      const captured = JSON.parse(await fs.readFile(captureManifest, 'utf8'));
      const sources = captured.recordings.map(recording => {
        if (!/^static\/tutorials\/media\/[a-z0-9-]+\.mp4$/.test(recording.file)) {
          throw new Error(`Invalid tutorial recording path: ${recording.file}`);
        }
        return recording.file.slice('static'.length);
      });
      if (new Set(sources).size !== sources.length) throw new Error('Duplicate tutorial video in the capture manifest.');
      await Promise.all(sources.map(source => fs.access(path.join(siteDir, 'static', source))));

      if (options.publish && !previousFile) {
        throw new Error('Production video metadata requires PHCODE_VIDEO_PUBLICATIONS_FILE. Run scripts/prepare-tutorial-publications.cjs first.');
      }
      const previous = previousFile
        ? validatePublications(JSON.parse(await fs.readFile(previousFile, 'utf8')))
        : {version: 1, videos: {}};
      // Only a deployment build assigns dates. The successful deployment saves
      // them with the site; later builds restore them from the gh-pages branch.
      return options.publish
        ? addPublicationDates(previous, sources, new Date().toISOString())
        : previous;
    },
    contentLoaded({content, actions}) {
      actions.setGlobalData({uploadDates: content.videos});
    },
    async postBuild({content, outDir}) {
      const target = path.join(outDir, PUBLICATIONS_PATH);
      await fs.mkdir(path.dirname(target), {recursive: true});
      await fs.writeFile(target, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
    },
  };
};

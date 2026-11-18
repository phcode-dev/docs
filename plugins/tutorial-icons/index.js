const fs = require('node:fs/promises');
const path = require('node:path');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const icons = require('../../src/components/TutorialIcon/icons');

// The article and these image files share the same SVG geometry. Export images
// for Markdown consumers without changing the article's inline, themed icons.
function renderIcon(name, active = false) {
  const icon = icons[name];
  if (!icon) throw new Error(`Unknown tutorial icon: ${name}`);
  const light = active ? '#a85b00' : '#606770';
  const dark = active ? '#f8a949' : '#dadde1';
  const theme = `svg{color:${light}}@media(prefers-color-scheme:dark){svg{color:${dark}}}`;
  return '<!-- Attribution: sources.json and adjacent LICENSE files. -->\n' + renderToStaticMarkup(React.cloneElement(icon, {
    xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 20,
  }, React.createElement('style', null, theme), icon.props.children));
}

module.exports = function tutorialIcons() {
  return {
    name: 'tutorial-icon-images',
    async postBuild({outDir}) {
      const directory = path.join(outDir, 'img/tutorial-icons');
      await fs.mkdir(directory, {recursive: true});
      await Promise.all(Object.keys(icons).flatMap(name => [false, true].map(active =>
        fs.writeFile(path.join(directory, `${name}${active ? '-active' : ''}.svg`), renderIcon(name, active)))));
      await Promise.all(['sources.json', 'LICENSE-FONT-AWESOME.txt', 'LICENSE-BOOTSTRAP-ICONS.txt'].map(file =>
        fs.copyFile(path.join(__dirname, '../../src/components/TutorialIcon', file), path.join(directory, file))));
      console.log(`[tutorial-icons] Exported ${Object.keys(icons).length} control shapes in two states.`);
    },
  };
};

module.exports.renderIcon = renderIcon;

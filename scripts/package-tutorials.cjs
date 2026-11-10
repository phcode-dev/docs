const fs = require('node:fs');
const path = require('node:path');
const {zipSync} = require('fflate');

const TUTORIALS = path.join(__dirname, '../static/tutorials');
const PROJECTS = ['first-website', 'bootstrap-starter'];

function projectFiles(folder, relative = '') {
  const files = {};
  for (const entry of fs.readdirSync(path.join(folder, relative), {withFileTypes: true})) {
    const name = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.isDirectory()) Object.assign(files, projectFiles(folder, name));
    else if (entry.isFile()) files[name] = fs.readFileSync(path.join(folder, name));
  }
  return files;
}

function packageTutorials() {
  for (const project of PROJECTS) {
    const files = projectFiles(path.join(TUTORIALS, project));
    const entries = Object.fromEntries(Object.keys(files).sort().map(name => [`${project}/${name}`, files[name]]));
    // Stable entry order and metadata keep repeat builds byte-for-byte identical.
    const archive = zipSync(entries, {
      level: 6,
      mtime: new Date(2026, 0, 1, 0, 0, 0),
      os: 3,
      attrs: (0o100644 << 16) >>> 0,
    });
    fs.writeFileSync(path.join(TUTORIALS, `${project}.zip`), archive);
    console.log(`Created tutorials/${project}.zip`);
  }
}

if (require.main === module) packageTutorials();

module.exports = {TUTORIALS, PROJECTS, projectFiles};

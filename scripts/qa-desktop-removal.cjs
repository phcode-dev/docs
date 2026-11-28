const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const {createHash} = require('node:crypto');

assert.equal(process.env.GITHUB_ACTIONS, 'true', 'Run only on a disposable hosted Actions runner');
const root = process.cwd();
const temp = process.env.RUNNER_TEMP;
const dest = path.join(root, 'removal-results');
const notes = [];
fs.mkdirSync(dest, {recursive: true});
const record = (value) => { console.log(value); notes.push(value); fs.writeFileSync(path.join(dest, 'verification.txt'), notes.join('\n') + '\n'); };
function run(cmd, args, options = {}) {
  return execFileSync(cmd, args, {encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, ...options});
}
function seed(file, content) {
  fs.mkdirSync(path.dirname(file), {recursive: true});
  fs.writeFileSync(file, content);
}
function release(asset, sha) {
  const file = path.join(temp, asset);
  run(process.platform === 'win32' ? 'curl.exe' : 'curl', ['-fsSL', '--retry','3', 'https://github.com/phcode-dev/phoenix-desktop/releases/download/prod-app-v5.5.11/' + asset, '-o', file]);
  assert.equal(createHash('sha256').update(fs.readFileSync(file)).digest('hex'), sha);
  return file;
}
function sleep(ms) { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms); }
const project = path.join(os.homedir(), 'Documents', 'Phoenix Code guide example', 'index.html');
seed(project, '<h1>My saved project</h1>');
const prefs = path.join(process.platform === 'win32' ? process.env.LOCALAPPDATA : process.platform === 'darwin' ? path.join(os.homedir(), 'Library', 'Application Support') : path.join(os.homedir(), '.local', 'share'), 'io.phcode','phcode.json');
seed(prefs, '{"tabSize":2}');
record('Native host: ' + process.platform + ' ' + os.release());
if (process.platform === 'darwin') {
  const archive = release('Phoenix.Code_aarch64.app.tar.gz','26ad03278c65eb3dc921b997d19ccc4652f2c761d3a055294f19e25a6005d08c');
  const library = path.join(os.homedir(), 'Applications');
  fs.mkdirSync(library, {recursive:true});
  run('tar', ['-xzf', archive, '-C', library]);
  const app = path.join(library,'Phoenix Code.app');
  assert.equal(run('defaults',['read',path.join(app,'Contents','Info'),'CFBundleIdentifier']).trim(),'io.phcode');
  record('Finder application: Phoenix Code.app, version ' + run('defaults',['read',path.join(app,'Contents','Info'),'CFBundleShortVersionString']).trim());
  run('open', ['-R', app]);
  sleep(2500);
  try {
    run('osascript',['-e','tell application "Finder" to set current view of front window to list view','-e','tell application "Finder" to set bounds of front window to {125, 115, 930, 560}'], {timeout:8000});
  } catch (e) {record('Finder layout: ' + e.message.slice(0,180));}
  run('open',['-R',app]);
  sleep(1200);
  const screenSource = `import AppKit
import CoreGraphics
let list = CGWindowListCopyWindowInfo([.optionOnScreenOnly,.excludeDesktopElements], kCGNullWindowID) as? [[String:Any]] ?? []
for w in list where (w[kCGWindowOwnerName as String] as? String) == "Finder" && (w[kCGWindowLayer as String] as? Int) == 0 {
 if let n = w[kCGWindowNumber as String] as? Int { print(n); break }
}`;
  const swfile = path.join(temp,'finder-window.swift');
  fs.writeFileSync(swfile, screenSource);
  const number = run('swift', [swfile]).trim();
  if (number) {
    try {run('screencapture',['-x','-o','-l',number,path.join(dest,'finder.png')]);record('Captured the Finder Applications window.');}
    catch(e){record('Finder screenshot: ' + e.message.slice(0,180));}
  }
  if (!fs.existsSync(path.join(dest,'finder.png'))) {
    try {run('screencapture',['-x',path.join(dest,'finder-screen.png')]);record('Captured the full desktop for cropping.');}
    catch(e){record('Desktop screenshot: ' + e.message.slice(0,180));}
  }
  let trash;
  try {
    trash = run('osascript',['-e', 'on run argv','-e','tell application "Finder" to delete (POSIX file (item 1 of argv) as alias)','-e','end run',app],{timeout:8000});
    record('Moved the selected app to Trash using Finder.');
  } catch(e) {
    const nativeTrash = 'import Foundation\nvar replacement: NSURL?\ntry FileManager.default.trashItem(at: URL(fileURLWithPath: CommandLine.arguments[1]), resultingItemURL: &replacement)\nprint(replacement?.path ?? "")';
    const swift = path.join(temp,'trash-demo.swift'); fs.writeFileSync(swift,nativeTrash);
    trash = run('swift',[swift,app]);record('Moved the app to Trash using the native macOS file manager API.');
  }
  assert.equal(fs.existsSync(app),false);
  assert.match(trash,/Phoenix Code/);
} else if(process.platform === 'win32') {
  const exe = release('Phoenix.Code_5.5.11_x64-setup.exe','ef7f0542e682c808c748074df38331b0ed9c7105e42164b29961ad92b7a0fd88');
  run(exe,['/S'],{timeout:270000});
  const data = run('powershell.exe',['-NoProfile','-NonInteractive','-ExecutionPolicy','RemoteSigned','-File',path.join(root,'scripts','qa-desktop-window.ps1'),dest],{timeout:150000});
  record(data.trim());
  assert.match(data,/Uninstall registration removed/);
} else {
  const script=path.join(temp,'phoenix-installer.sh');
  run('curl',['-fsSL','--retry','3','https://updates.phcode.io/linux/installer.sh','-o',script]);
  fs.mkdirSync(path.join(os.homedir(),'.config'),{recursive:true});
  fs.mkdirSync(path.join(os.homedir(),'.local','bin'),{recursive:true});
  const install = require('node:child_process').spawnSync('xvfb-run',['-a','bash',script],{
    timeout:480000,encoding:'utf8',maxBuffer:32*1024*1024,env:{...process.env,XDG_CURRENT_DESKTOP:'GNOME'}});
  const output=(install.stdout+'\n'+install.stderr).split('\n').filter(l=>!/^\s*\d+K /.test(l)).slice(-32).join('\n');
  record(output);
  if(install.status !== 0) record('Installer exited '+install.status+'; checking its actual installed files before testing removal.');
  for (const item of ['.phoenix-code/phoenix-code.AppImage','.local/share/applications/PhoenixCode.desktop','.local/bin/phcode']) {
    assert(fs.existsSync(path.join(os.homedir(),item)), 'Installed file '+item);
  }
  record('Installed the AppImage using the official Linux installer.');
  const result=run('xvfb-run',['-a','bash',script,'--uninstall']);
  assert.match(result,/Uninstallation of Phoenix Code completed\./);
  record(result.replace(/\x1b\[[0-9;]*m/g,'').trim());
  for (const item of ['.phoenix-code','.local/share/applications/PhoenixCode.desktop','.local/bin/phcode']) {
    assert(!fs.existsSync(path.join(os.homedir(),item)), 'Removed '+item);
  }
}
assert.equal(fs.readFileSync(project,'utf8'),'<h1>My saved project</h1>');
assert.equal(fs.readFileSync(prefs,'utf8'),'{"tabSize":2}');
record('The saved project and the preferences file both retained their original contents.');

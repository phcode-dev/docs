const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const {createHash}=require('node:crypto');
const {execFileSync,spawn,spawnSync}=require('node:child_process');
assert.equal(process.env.GITHUB_ACTIONS,'true','Use only a disposable hosted runner');
const temp=process.env.RUNNER_TEMP;
const output=path.resolve('recovery-results');
fs.mkdirSync(output,{recursive:true});
const record=s=>{console.log(s);fs.appendFileSync(path.join(output,'verified.txt'),s+'\n');};
const run=(cmd,args,opt={})=>execFileSync(cmd,args,{encoding:'utf8',maxBuffer:48*1024*1024,...opt});
function wait(ms){Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,ms);}
function seed(file,content){fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content);}
function release(name,hash){
 const file=path.join(temp,name);
 run(process.platform==='win32'?'curl.exe':'curl',['-fsSL','--retry','3','https://github.com/phcode-dev/phoenix-desktop/releases/download/prod-app-v5.5.11/'+name,'-o',file]);
 assert.equal(createHash('sha256').update(fs.readFileSync(file)).digest('hex'),hash);
 return file;
}
const saved='<h1>My saved project</h1>\n';
const project=path.join(os.homedir(),'Documents','Garden Notes','index.html');
const prefRoot=process.platform==='win32'?process.env.LOCALAPPDATA:process.platform==='darwin'?path.join(os.homedir(),'Library','Application Support'):path.join(os.homedir(),'.local','share');
const prefs=path.join(prefRoot,'io.phcode','phcode.json');
function createExample(){seed(project,saved);seed(prefs,'{"tabSize":2}\n');}
function filesIntact(){
 assert.equal(fs.readFileSync(project,'utf8'),saved);
 assert.equal(JSON.parse(fs.readFileSync(prefs,'utf8')).tabSize,2);
 record('The saved HTML project in Documents and the user tabSize preference were retained.');
}
function removeFromTestInstall(file){
 assert(fs.statSync(file).size>1000000);
 fs.renameSync(file,file+'.held-for-recovery-check');
 assert(!fs.existsSync(file));record('An incomplete test installation was prepared by moving only the executable on this disposable runner.');
}
function linux(){
 const installer=path.join(temp,'installer.sh');
 run('curl',['-fsSL','--retry','3','https://updates.phcode.io/linux/installer.sh','-o',installer]);
 fs.mkdirSync(path.join(os.homedir(),'.config'),{recursive:true});
 fs.mkdirSync(path.join(os.homedir(),'.local','bin'),{recursive:true});
 // The public command pipes the installer into Bash. Keep stdin non-interactive here as well.
 const install=()=>{
  const r=spawnSync('xvfb-run',['-a','dbus-run-session','--','bash','-s'],{input:fs.readFileSync(installer),timeout:450000,encoding:'utf8',maxBuffer:45*1024*1024,env:{...process.env,XDG_CURRENT_DESKTOP:'GNOME'}});
  const log=(r.stdout+'\n'+r.stderr).split('\n').filter(l=>!/^\s*\d+K /.test(l)).slice(-30).join('\n').replace(/\x1b\[[0-9;]*m/g,'');
  record('Official installer exit '+r.status+'\n'+log);
  assert.match(log,/Installation completed successfully/i);
  return log;
 };
 const file=path.join(os.homedir(),'.phoenix-code','phoenix-code.AppImage');
 install();createExample();removeFromTestInstall(file);
 const log=install();
 assert(fs.existsSync(file));
 assert.match(log,/Reinstalling Phoenix Code|already installed/i);
 filesIntact();
 const app=path.join(os.homedir(),'.local','bin','phcode');
 assert(fs.existsSync(app));assert(fs.existsSync(path.join(os.homedir(),'.local','share','applications','PhoenixCode.desktop')));
 const start=path.join(temp,'show-editor.sh');
 const commands=['set -eu','mkdir -p "$HOME/.local/share/keyrings"','echo guide-test-password | gnome-keyring-daemon --unlock >/dev/null','gnome-keyring-daemon --start --components=secrets >/dev/null','if command -v xfwm4 >/dev/null; then xfwm4 >/dev/null 2>&1 & elif command -v openbox >/dev/null; then openbox >/dev/null 2>&1 & fi','"$1" "$2" >"$3/linux-launch.log" 2>&1 &','for n in $(seq 1 60); do','  windows=$(xwininfo -root -tree 2>/dev/null || true); echo "$windows" > "$3/linux-windows.txt"','  if echo "$windows" | grep -Eiq "Garden Notes|default project|index.html"; then echo "$windows" | grep -Ei "Garden Notes|default project|index.html" | head -5; exit 0; fi','  sleep 1','done','tail -12 "$3/linux-launch.log"; exit 1'];
 fs.writeFileSync(start,commands.join('\n'));
 run('sudo',['apt-get','install','-y','openbox','xterm','xdotool','scrot'],{stdio:'ignore'});
 const titles=run('xvfb-run',['-a','dbus-run-session','--','bash',start,app,project,output],{timeout:95000});
 record('Reopened editor: '+titles.trim());filesIntact();
}
function mac(){
 const dmg=release('Phoenix.Code_5.5.11_aarch64.dmg','911abf90c1d1972c54d4fa010af691e6c05354f942b495719392a2413129299e');
 const mount=path.join(temp,'Phoenix Code installer');
 let mounted=false;
 for(let i=0;i<3;i++){
  const result=spawnSync('hdiutil',['attach','-readonly','-nobrowse','-mountpoint',mount,dmg],{input:'Y\n',encoding:'utf8',timeout:90000});
  record('Disk image mount: '+result.status+' '+(result.stdout+' '+result.stderr).slice(-800));
  if(result.status===0){mounted=true;break;}wait(2000);
 }
 assert(mounted,'Could not open the official disk image');
 const source=path.join(mount,'Phoenix Code.app'),folder='/Applications',dest=path.join(folder,'Phoenix Code.app');
 assert(fs.existsSync(path.join(mount,'Applications')));assert(!fs.existsSync(dest));
 run('ditto',[source,dest]);
 const binary=run('defaults',['read',path.join(dest,'Contents','Info'),'CFBundleExecutable']).trim();
 assert.equal(run('defaults',['read',path.join(dest,'Contents','Info'),'CFBundleShortVersionString']).trim(),'5.5.11');
 createExample();removeFromTestInstall(path.join(dest,'Contents','MacOS',binary));
 run('open',[mount]);wait(1600);
 const wsource=path.join(temp,'finder-window.swift');
 fs.writeFileSync(wsource,'import AppKit\nimport CoreGraphics\nlet rows=CGWindowListCopyWindowInfo([.optionOnScreenOnly,.excludeDesktopElements],kCGNullWindowID) as? [[String:Any]] ?? []\nfor w in rows where (w[kCGWindowOwnerName as String] as? String) == "Finder" && (w[kCGWindowLayer as String] as? Int)==0 { if let id=w[kCGWindowNumber as String] as? Int {print(id);break}}');
 const windowId=run('swift',[wsource]).trim();if(windowId)run('screencapture',['-x','-o','-l',windowId,path.join(output,'mac-installer.png')]);
 const finder=['on run argv','set src to (POSIX file (item 1 of argv)) as alias','set dst to (POSIX file (item 2 of argv)) as alias','tell application "Finder" to duplicate src to dst with replacing','end run'];
 run('osascript',[...finder.flatMap(l=>['-e',l]),source,folder],{timeout:150000});
 assert(fs.existsSync(path.join(dest,'Contents','MacOS',binary)));filesIntact();
 run('open',['-a',dest,project]);const readWindow='tell application "System Events" to get name of every window of process "Phoenix Code"';
 let titles='';for(let i=0;i<35;i++){wait(1300);try{titles=run('osascript',['-e',readWindow],{timeout:3500}).trim();}catch{}if(/Garden Notes|index.html|default project/i.test(titles))break;}
 record('Mac window titles: '+titles);assert.match(titles,/Garden Notes|index.html|default project/i);
 filesIntact();run('hdiutil',['detach',mount,'-quiet']);
}
function windows(){
 const setup=release('Phoenix.Code_5.5.11_x64-setup.exe','ef7f0542e682c808c748074df38331b0ed9c7105e42164b29961ad92b7a0fd88');
 run(setup,['/S'],{timeout:290000});
 const dir=path.join(process.env.LOCALAPPDATA,'Phoenix Code');
 record('Installed executables: '+fs.readdirSync(dir).filter(f=>f.endsWith('.exe')).join(', '));
 const name=fs.readdirSync(dir).find(f=>/^phoenix.*\.exe$/i.test(f));assert(name);
 const app=path.join(dir,name);
 createExample();removeFromTestInstall(app);
 const title=run('powershell.exe',['-NoProfile','-NonInteractive','-File',path.resolve('scripts/qa-repair-window.ps1'),setup,output],{timeout:180000});record(title.trim());
 assert(fs.existsSync(app)); filesIntact();
 const program=spawn(app,[project],{stdio:'ignore',detached:true});program.unref();
 let titleText='';
 for(let i=0;i<35;i++){wait(1500);titleText=run('powershell.exe',['-NoProfile','-Command','(Get-Process -Name "Phoenix Code","phoenix-code" -ErrorAction SilentlyContinue | ForEach-Object {$_.MainWindowTitle}) -join " " ; exit 0']).trim();if(/Garden Notes|index.html|default project/i.test(titleText))break;}
 record('Windows editor title: '+titleText);assert.match(titleText,/Garden Notes|index.html|default project/i);filesIntact();
}
record('Phoenix Code 5.5.11 on '+process.platform+' '+os.release());
({win32:windows,darwin:mac,linux})[process.platform]();

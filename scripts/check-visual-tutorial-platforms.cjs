const assert = require('node:assert/strict');
const {spawn, spawnSync} = require('node:child_process');
const crypto = require('node:crypto');
const fs = require('node:fs/promises');
const http = require('node:http');
const net = require('node:net');
const os = require('node:os');
const path = require('node:path');

// The four portable artifacts are pinned to rclone's published v1.76.0 SHA256SUMS.
const hashes = {
  'linux-amd64':'b00f00b3266c3764413afe599d3ec316f6f43b3e0ea8a0bc1d186d2133e46df7',
  'osx-amd64':'4f5835733d52b818340f97b1fc0348a70461534d123363a183ca2b660219595a',
  'osx-arm64':'e72dc90b70f4947a7b72b61bde4a4fbba5777b2874fb448951ffdde67ebd0ab7',
  'windows-amd64':'8b4fd2737ade4e70c057ef4a49deb7cffe94b0fb9d7587c189d149823f21a1dc'
};
const windows = process.platform === 'win32';
const mac = process.platform === 'darwin';
function run(command, args, options = {}) {
  const result = spawnSync(command, args, {encoding:'utf8',timeout:60000,...options});
  if (result.error || result.status !== (options.expected || 0)) throw new Error(command + ' failed: ' + (result.error?.message || result.stderr || result.stdout));
  return result.stdout.replace(/\r\n/g,'\n');
}
function extract(zip, folder) {
  if (windows) {
    run('powershell.exe',['-NoProfile','-Command','Expand-Archive -LiteralPath $env:TUTORIAL_ARCHIVE -DestinationPath $env:TUTORIAL_DESTINATION'],{env:{...process.env,TUTORIAL_ARCHIVE:zip,TUTORIAL_DESTINATION:folder}});
  } else if (mac) run('ditto',['-x','-k',zip,folder]);
  else run('unzip',['-q',zip,'-d',folder]);
}
async function main() {
  const scratch=await fs.mkdtemp(path.join(os.tmpdir(),'visual tutorial '));
  const samples=path.resolve(__dirname,'../static/tutorials');
  extract(path.join(samples,'first-website.zip'),scratch);
  extract(path.join(samples,'compare-css.zip'),scratch);
  const css=path.join(scratch,'compare-css');
  const command='git --no-pager diff --no-index -- old.css new.css';
  const shell=windows?path.join(process.env.SystemRoot,'System32','WindowsPowerShell','v1.0','powershell.exe'):mac?'/bin/zsh':'/bin/bash';
  const args=windows?['-NoProfile','-Command',command+'; exit $LASTEXITCODE']:['-c',command];
  const diff=run(shell,args,{cwd:css,expected:1});
  assert.match(diff,/^-  color: navy;$/m);
  assert.match(diff,/^\+  color: teal;$/m);
  assert.match(diff,/^   text-decoration: underline;$/m);
  console.log(process.platform,process.arch,shell,'opened the ZIP and showed the expected CSS change.');
  const platform=(windows?'windows':mac?'osx':'linux')+'-'+(process.arch==='arm64'?'arm64':'amd64');
  assert.ok(hashes[platform],platform);
  const release='rclone-v1.76.0-'+platform;
  const download=await fetch('https://downloads.rclone.org/v1.76.0/'+release+'.zip',{signal:AbortSignal.timeout(75000)});
  assert.equal(download.status,200);
  const bytes=Buffer.from(await download.arrayBuffer());
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),hashes[platform]);
  const binaryZip=path.join(scratch,'rclone.zip');
  await fs.writeFile(binaryZip,bytes);
  extract(binaryZip,scratch);
  const binary=path.join(scratch,release,windows?'rclone.exe':'rclone');
  if(!windows) await fs.chmod(binary,0o700);
  const ssh=tool=>windows?path.join(process.env.SystemRoot,'System32','OpenSSH',tool+'.exe'):tool;
  for(const name of ['host','client']) run(ssh('ssh-keygen'),['-q','-t','ed25519','-N','','-f',name],{cwd:scratch});
  const reservation=net.createServer();
  await new Promise(resolve=>reservation.listen(0,'127.0.0.1',resolve));
  const port=reservation.address().port;
  await new Promise(resolve=>reservation.close(resolve));
  const publicKey=(await fs.readFile(path.join(scratch,'host.pub'),'utf8')).trim().split(/\s+/).slice(0,2).join(' ');
  await fs.writeFile(path.join(scratch,'known_hosts'),'[127.0.0.1]:'+port+' '+publicKey+'\n');
  await fs.writeFile(path.join(scratch,'rclone.conf'),'');
  const root=path.join(scratch,'server','public_html');
  await fs.mkdir(root,{recursive:true});
  const server=spawn(binary,['serve','sftp',path.dirname(root),'--config',path.join(scratch,'rclone.conf'),'--addr','127.0.0.1:'+port,'--user','trail','--authorized-keys',path.join(scratch,'client.pub'),'--key',path.join(scratch,'host'),'--vfs-cache-mode','off','--dir-cache-time','1s'],{cwd:scratch,stdio:['ignore','ignore','pipe']});
  let errors='';server.stderr.on('data',chunk=>{errors+=chunk;});
  const files=['index.html','about.html','contact.html','styles.css','images/trail.svg'];
  const local=path.join(scratch,'first-website');
  const remote=path.join(root,'trail-notes');
  const web=http.createServer(async(req,res)=>{
    const name=req.url==='/'?'index.html':req.url.slice(1);
    if(!files.includes(name)){res.writeHead(404).end();return;}
    try{res.end(await fs.readFile(path.join(remote,name)));}catch{res.writeHead(404).end();}
  });
  try{
    let ready=false;
    for(let i=0;i<60&&!ready;i++){
      ready=await new Promise(resolve=>{const s=net.connect(port,'127.0.0.1');s.once('connect',()=>{s.destroy();resolve(true);});s.once('error',()=>resolve(false));});
      if(!ready)await new Promise(r=>setTimeout(r,150));
    }
    assert.ok(ready,errors);
    async function transfer(commands) {
      const batch=path.join(scratch,'batch');
      // The sftp process starts in the extracted website folder.
      await fs.writeFile(batch,commands.join('\n')+'\n');
      const known=path.join(scratch,'known_hosts').replaceAll('\\','/');
      run(ssh('sftp'),['-P',String(port),'-i',path.join(scratch,'client'),'-o','IdentitiesOnly=yes','-o','StrictHostKeyChecking=yes','-o','UserKnownHostsFile="'+known+'"','-b',batch,'trail@127.0.0.1'],{cwd:local});
    }
    await transfer(['cd public_html','mkdir trail-notes','cd trail-notes','mkdir images',...files.map(name=>'put '+name+' '+name)]);
    await new Promise(resolve=>web.listen(0,'127.0.0.1',resolve));
    const url='http://127.0.0.1:'+web.address().port+'/';
    for(const name of files){
      const expected=await fs.readFile(path.join(local,name));
      assert.deepEqual(await fs.readFile(path.join(remote,name)),expected);
      assert.deepEqual(Buffer.from(await (await fetch(url+name)).arrayBuffer()),expected);
    }
    const index=path.join(local,'index.html');
    const original=await fs.readFile(index,'utf8');
    assert.ok(original.includes('<h1>A little time outside.</h1>'));
    await fs.writeFile(index,original.replace('A little time outside.','Our weekend walks.'));
    await transfer(['cd /public_html/trail-notes','put index.html']);
    assert.match(await (await fetch(url)).text(),/<h1>Our weekend walks\.<\/h1>/);
    console.log('Native OpenSSH SFTP verified the host key, uploaded all five files, and transferred the edited home page. HTTP returned the updated heading.');
  }finally{web.close();server.kill();}
}
main().catch(error=>{console.error(error);process.exitCode=1;});

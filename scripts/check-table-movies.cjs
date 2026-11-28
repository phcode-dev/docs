const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const {chromium} = require(process.env.TABLE_BROWSER_MODULE || '../.qa-runtime/node_modules/playwright-core');
const root = path.resolve(__dirname, '..');
const movies = require('../src/data/table-tutorial-videos.json');

async function serve() {
  const files = new Map();
  for (const [edition, movie] of Object.entries(movies)) {
    files.set('/'+edition, ['text/html', Buffer.from('<!doctype html><meta name="viewport" content="width=device-width"><video muted controls style="max-width:100%" poster="'+movie.poster+'" src="'+movie.source+'"><track kind="captions" srclang="en" src="'+movie.captions+'"></video>')]);
    for (const [url, type] of [[movie.source,'video/mp4'], [movie.poster,'image/jpeg'], [movie.captions,'text/vtt']]) {
      files.set(url, [type, await fs.readFile(path.join(root,'static',url))]);
    }
  }
  const server = http.createServer((req, res) => {
    const entry = files.get(req.url);
    if (!entry) return res.writeHead(404).end();
    const [type, data] = entry;
    const match = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range || '');
    const headers = {'Content-Type':type, 'Accept-Ranges':'bytes'};
    if (match) {
      const start=Number(match[1]), end=match[2] ? Math.min(Number(match[2]),data.length-1) : data.length-1;
      if (start>end || start>=data.length) return res.writeHead(416).end();
      res.writeHead(206,{...headers,'Content-Range':'bytes '+start+'-'+end+'/'+data.length,'Content-Length':end-start+1}).end(data.subarray(start,end+1));
    } else res.writeHead(200,{...headers,'Content-Length':data.length}).end(data);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  return server;
}

async function main() {
  const server=await serve();
  const browser=await chromium.launch({channel:'chrome'});
  try {
    for (const [edition, movie] of Object.entries(movies)) {
      const page=await browser.newPage({viewport:{width:390,height:800}});
      try {
        await page.goto('http://127.0.0.1:'+server.address().port+'/'+edition);
        const player=page.locator('video');
        await player.evaluate(async video=>{
          video.textTracks[0].mode='hidden';
          await video.play();
        });
        await page.waitForFunction(()=>document.querySelector('video').currentTime>0.25);
        await player.evaluate(v=>v.pause());
        await page.waitForFunction(()=>document.querySelector('track').readyState===2);
        const result=await player.evaluate(async video=>{
          const img=new Image();img.src=video.poster;await img.decode();
          await new Promise(resolve=>{video.addEventListener('seeked',resolve,{once:true});video.currentTime=video.duration-1;});
          const track=video.textTracks[0];return {
            duration:video.duration,width:video.videoWidth,height:video.videoHeight,poster:[img.width,img.height],
            cues:Array.from(track.cues,cue=>cue.text),active:track.activeCues[0]?.text
          };
        });
        assert.equal(result.duration,Number(movie.metadata.duration.slice(2,-1)));
        assert.deepEqual([result.width,result.height],[movie.width,movie.height]);
        assert.deepEqual(result.poster,[movie.width,movie.height]);
        assert.deepEqual(result.cues,movie.instructions);
        assert.equal(result.active,movie.instructions.at(-1));
        console.log(process.platform,browser.version(),edition,'plays, pauses, and seeks to the final caption at',result.duration,'seconds');
      } finally { await page.close(); }
    }
  } finally { await browser.close(); await new Promise(resolve=>server.close(resolve)); }
}
main().catch(error=>{console.error(error);process.exitCode=1;});

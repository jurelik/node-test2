const send = require('send');
const express = require('express');
const ytmp3 = require('youtube-mp3-downloader');

const YD = new ytmp3({
  'ffmpegpath': 'usr⁩/local⁩/Cellar⁩/ffmpeg',
  'outputPath': './public/download/',
  'youtubeVideoQuality': 'highest'
});
const app = express();

app.use(express.static('public'));

app.get('/stream/:id', (req, res) => {
  send(req, `./public/download/${req.params.id}.mp3`).pipe(res);
});

app.get('/yt/:id', (req, res) => {
  console.log('request made');
  YD.download(req.params.id, `${req.params.id}.mp3`);
  YD.on('finished', (err, data) => {
    res.end('done');
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});


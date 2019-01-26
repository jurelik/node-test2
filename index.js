const fs = require('fs');
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
  const id = req.params.id;
  console.log('request made');
  YD.download(id, `${id}.mp3`);
  YD.on('finished', (err, data) => {
    // ENABLE THIS TO DELETE FILE AFTER A CERTAIN AMOUNT OF TIME
    // setTimeout(() => {
    //   fs.unlink(`./public/download/${id}.mp3`, (err) => {

    //   });
    // }, 3000);
    res.type('audio/mpeg');
    res.end('done');
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});


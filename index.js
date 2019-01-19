const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/stream', (req, res) => {
  let stream = fs.createReadStream('./public/comp 250.mp3');
  res.type('audio/mpeg');
  stream.pipe(res);
  console.log('request incoming');
});

app.get('/test', (req, res) => {
  res.send('sup');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});


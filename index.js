const fs = require('fs');
const send = require('send');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/stream', (req, res) => {
  send(req, './public/comp 250.mp3').pipe(res);
});

app.get('/test', (req, res) => {
  res.send('sup');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});


const audioTag = document.getElementById('audio-tag');
const audioElem = document.createElement('audio');

function create() {
  audioElem.setAttribute('controls', '');
  document.body.appendChild(audioElem);
};

function update() {
  audioElem.setAttribute('src', 'http://localhost:3000/stream');
}
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

function create(id) {
  const audioElem = document.createElement('audio');
  audioElem.setAttribute('controls', '');
  audioElem.setAttribute('src', `http://localhost:3000/stream/${id}`);
  audioElem.id = "audio";
  document.body.appendChild(audioElem);

  // connect();
};

function get(id) {
  const request = new XMLHttpRequest();
  request.open('GET', `http://localhost:3000/yt/${id}`, true);
  request.onload = function() {
    console.log(request.response);
    create(id);
  };
  request.send();
};

function connect() {
  const audioElem = document.getElementById('audio');
  const source = context.createMediaElementSource(audioElem);

  source.connect(context.destination);
};
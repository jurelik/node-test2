const audioTag = document.getElementById('audio-tag');

function create(id) {
  const audioElem = document.createElement('audio');
  audioElem.setAttribute('controls', '');
  audioElem.setAttribute('src', `http://localhost:3000/stream/${id}`);
  document.body.appendChild(audioElem);
};

function update() {
  audioElem.setAttribute('src', 'http://localhost:3000/stream');
}

function get(id) {
  const request = new XMLHttpRequest();
  request.open('GET', `http://localhost:3000/yt/${id}`, true);
  request.onload = function() {
    console.log(request.response);
    create(id);
  };
  request.send();
}
const audioTag = document.getElementById('audio-tag');

function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/test", true);
  request.onload = function() {
    console.log(request.response);
  };
  request.send();
};
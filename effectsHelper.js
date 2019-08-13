var audio = new Audio();
audio.src = 'audio files/song.mp3';

audio.controls = true;
audio.autoplay = true;
document.body.appendChild(audio);

var context = new webkitAudioContext();
var analyser = context.createAnalyser();


window.addEventListener('load', function(e) {

  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);

}, false);



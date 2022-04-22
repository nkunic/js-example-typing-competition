// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!
var playerArea = document.querySelector('#playerArea');
var playerBtn = document.querySelector('#playerBtn');

var comp1Area = document.querySelector('#comp1Area');
var comp1Btn = document.querySelector('#comp1Btn');

var comp2Area = document.querySelector('#comp2Area');
var comp2Btn = document.querySelector('#comp2Btn');

var comp3Area = document.querySelector('#comp3Area');
var comp3Btn = document.querySelector('#comp3Btn');

var comp4Area = document.querySelector('#comp4Area');
var comp4Btn = document.querySelector('#comp4Btn');

var startBtn = document.querySelector('#startBtn');
var infoArea = document.querySelector('#infoArea');
var texts = [
  "Juče je bio divan dan", "Danas je divan dan", "Sutra će biti dian dan"
]

startBtn.addEventListener('click', timer);

function timer() {
  var time = 3;
  startBtn.innerHTML = time;
  var loop = setInterval(function () {
    time--;
    startBtn.innerHTML = time;
    if (time === 0) {
      clearInterval(loop);
      // startBtn.style.display = "none";
      startBtn.classList.add('d-none');
      startTyping();      
    }
  }, 1000);
}

function startTyping() {
  var rand = Math.floor(Math.random()*texts.length);
  infoArea.innerHTML = '<h3>' + texts[rand] + '</h3>';
  infoArea.classList.remove('d-none');
  infoArea.classList.add('d-block');
  playerArea.focus();
}

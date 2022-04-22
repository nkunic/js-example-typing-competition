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

var startBtn = document.querySelector('#startBtn');
var infoArea = document.querySelector('#infoArea');
var texts = [
  'Juče je bio divan dan',
  'Danas je divan dan',
  'Sutra će biti divan dan',
];
var rand;
var winner = 0;

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
  rand = Math.floor(Math.random() * texts.length);
  infoArea.innerHTML = '<h3>' + texts[rand] + '</h3>';
  infoArea.classList.remove('d-none');
  infoArea.classList.add('d-block');
  playerArea.focus();
  comp1StartTyping();
  comp2StartTyping();
  comp3StartTyping();
  playerStartTyping();
}

function comp1StartTyping() {
  var text = texts[rand];
  console.log(text);
  var textArray = text.split('');
  var loop = setInterval(function () {
    if (textArray.length != 0) {
      comp1Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp1Btn.className = "btn btn-success w-100";
      comp1Btn.innerHTML = "Position: " + winner;
    }
  }, 750);
}

function comp2StartTyping() {
  var text = texts[rand];
  console.log(text);
  var textArray = text.split('');
  var loop = setInterval(function () {
    if (textArray.length != 0) {
      comp2Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp2Btn.className = "btn btn-success w-100";
      comp2Btn.innerHTML = "Position: " + winner;
    }
  }, 500);
}

function comp3StartTyping() {
  var text = texts[rand];
  console.log(text);
  var textArray = text.split('');
  var loop = setInterval(function () {
    if (textArray.length != 0) {
      comp3Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp3Btn.className = "btn btn-success w-100";
      comp3Btn.innerHTML = "Position: " + winner;
    }
  }, 250);
}

function playerStartTyping() {
  playerArea.addEventListener('keyup', function (event) {
    // console.log(playerArea.value);
    // console.log(this.value);
    // console.log(event);
    if (event.keyCode === 13) {
      var userText = playerArea.value.trim();
      console.log(userText);
      if (userText == texts[rand]) {
        // console.log('Tačno');
        winner++;
        playerBtn.className = "btn btn-success w-100";
        playerBtn.innerHTML = "Position: " + winner; 
      } else {
        // console.log('Nije tačno');
        playerBtn.className = "btn btn-danger";
        playerBtn.innerHTML = "Wrong typing";
      }
    }
  });
}

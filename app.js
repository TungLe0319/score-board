// NOTE  🌏  GLOBAL VARIABLES
let teamScore = 0;
let awayScore = 0;
let Score = document.querySelector('#Score');
let ScoreTwo = document.querySelector('#enemyScore');

function Play() {
  awayScore++;

  save();
}

function Play2() {
  teamScore++;
  save();
}

function risky() {
  teamScore += 3;

  save();
}

function risky2() {
  awayScore += 3;

  save();
}

// window.localStorage.setitem('Key-Name'), JSON.stringify(value)
function save() {
  window.localStorage.setItem('Score', JSON.stringify(teamScore));
  window.localStorage.setItem('AwayScore', JSON.stringify(awayScore));
  load();
  console.log('Team:', teamScore, 'Away:', awayScore);
}

function load() {
  let teamData = JSON.parse(window.localStorage.getItem('Score'));
  let awayData = JSON.parse(window.localStorage.getItem('AwayScore'));

  Score.innerText = teamData;

  ScoreTwo.innerText = awayData;
}

//NOTE  HAVE TO RETURN THE VALUE USING return()
//NOTE The Math.floor() function returns the largest integer less than or equal to a given number.
// NOTE a Function is a set of insutrctions that the computer can use whenever it wants. 
function RandomNumber() {
  return Math.floor(Math.random() * 10);
}

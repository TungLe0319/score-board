let teamScore = 0;
let awayScore = 0;
let Score = document.querySelector('#Score');
let ScoreTwo = document.querySelector('#enemyScore');

function incrementClick() {
  // Score.innerText = teamScore;
  // ScoreTwo.innerText = awayScore;

  if (RandomNumber() > 5) {
    teamScore++;
  } else {
    awayScore++;
  }
  draw();
  save();

  console.log(RandomNumber());
}

function draw() {
 
  Score.innerText = teamData;
  ScoreTwo.innerText = awayData;
}

function risky() {
  Score.innerText = teamScore;
  ScoreTwo.innerText = awayScore;
  if (RandomNumber() > 5) {
    teamScore += 3;
  } else {
    awayScore += 3;
  }

  save();
}

//NOTE  HAVE TO RETURN THE VALUE USING return()
//NOTE The Math.floor() function returns the largest integer less than or equal to a given number.
function RandomNumber() {
  return Math.floor(Math.random() * 10);
}

// NOTE  when saving something to local storage you use set

// window.localStorage.setitem('Key-Name'), JSON.stringify(value)

function save() {
  window.localStorage.setItem('Score', JSON.stringify(teamScore));
  window.localStorage.setItem('AwayScore', JSON.stringify(awayScore));
  console.log('Team:', teamScore, 'Away:', awayScore);
}

function loadTeam() {
  let teamData = JSON.parse(localStorage.getItem('Score'));
  if (teamData) {
    Score = teamData;
  }
}

function loadAway() {
  let awayData = JSON.parse(localStorage.getItem('AwayScore'));
  if (awayData) {
    ScoreTwo = awayData;
  }
}

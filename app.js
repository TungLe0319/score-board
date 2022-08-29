let teamScore = 0;
let enemyScore = 0;
let Score = document.querySelector('#Score');
let ScoreTwo = document.querySelector('#enemyScore');

function incrementClick() {
  Score.innerText = teamScore;
  ScoreTwo.innerText = enemyScore;

  if (RandomNumber() > 5) {
    teamScore++;
  } else {
    enemyScore++;
  }

  console.log(RandomNumber());
}

//NOTE  HAVE TO RETURN THE VALUE USING return()
//NOTE The Math.floor() function returns the largest integer less than or equal to a given number.
function RandomNumber() {
  return Math.floor(Math.random() * 10);
}

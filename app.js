// NOTE  🌏  GLOBAL VARIABLES
let teamScore = 0;
let enemyScore = 0;
let Score = document.querySelector('#score');
let ScoreTwo = document.querySelector('#enemy-score');



function team() {
  teamScore++;
draw()
  console.log('team:', teamScore, 'enemy:', enemyScore);
}

function enemy() {
  enemyScore++;
  draw()
  console.log('team:', teamScore, 'enemy:', enemyScore);
}

function team3() {
  teamScore += 3;
  draw()
  console.log('team:', teamScore, 'enemy:', enemyScore);
}

function enemy3() {
  enemyScore += 3;
  draw()
}

function reset(){
   teamScore=0
   enemyScore=0
   draw()
}

function draw(){
  Score.innerHTML = teamScore
  ScoreTwo.innerHTML= enemyScore
}

//NOTE  HAVE TO RETURN THE VALUE USING return()
//NOTE The Math.floor() function returns the largest integer less than or equal to a given number.
// NOTE a Function is a set of insutrctions that the computer can use whenever it wants.
function RandomNumber() {
  return Math.floor(Math.random() * 10);
}

// NOTE  🌏  GLOBAL VARIABLES
let teamScore = 0;
let enemyScore = 0;
let Score = document.querySelector('#Score');
let ScoreTwo = document.querySelector('#enemyScore');
drawScore()


function team() {
  
    teamScore++;
drawScore()

  
 save()
 
 console.log('team:',teamScore,'enemy:',enemyScore);
}


function enemy() {
 
  enemyScore++ ;
 drawScore()

  save();
  
  console.log('team:',teamScore,'enemy:',enemyScore);
}

function team3() {
  
    teamScore+=3;
drawScore()

  
 save()
 
 console.log('team:',teamScore,'enemy:',enemyScore);
}


function enemy3() {
 
  enemyScore+=3 ;
 drawScore()

  save();
  
  console.log('team:',teamScore,'enemy:',enemyScore);
}



// window.localStorage.setitem('Key-Name'), JSON.stringify(value)
function save() {
  window.localStorage.setItem('Score', JSON.stringify(teamScore));
  window.localStorage.setItem('EnemyScore', JSON.stringify(enemyScore));
  
  // console.log('Team:', teamScore, 'Away:', enemyScore);
}


function drawScore(){
   let teamData = JSON.parse(window.localStorage.getItem('Score'));
  let enemyData = JSON.parse(window.localStorage.getItem('EnemyScore'));
 
  Score.innerHTML = `<div>${teamData}</div>`
  ScoreTwo.innerHTML = `<div> ${enemyData} </div>`
}

// function load() {


  
//   Score.innerHTML=teamData
//   ScoreTwo.innerHTML=awayData
// }

//NOTE  HAVE TO RETURN THE VALUE USING return()
//NOTE The Math.floor() function returns the largest integer less than or equal to a given number.
// NOTE a Function is a set of insutrctions that the computer can use whenever it wants.
function RandomNumber() {
  return Math.floor(Math.random() * 10);
}



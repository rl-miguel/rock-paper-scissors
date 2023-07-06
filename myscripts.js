const a="Rock";
const b="Paper";
const c="Scissors";
let result="";
let playerResult=""

let computerSelect = Math.random();

console.log(computerSelect); // this shows result of Math.random 
function play(a,b,c){
if(computerSelect <=0.3333333333333333333333333333333333333333333333333){
    result= a;
} else if(computerSelect >=0.6666666666666666666666666666666666666666666666666){
    result= c;
} else{
    result= b;
}

console.log(result);
return result;
}

play(a,b,c)

function promptPlayer(question,a,b,c){ //prompts player for choice and adds to pointTotal
playerChoice= prompt("Rock, Paper or Scissors?");
console.log(playerChoice);

playerScore=0;

if(playerChoice=="Rock"){
    playerScore += 1;
} else if(playerChoice =="Paper"){
    playerScore += 2;
} else if(playerChoice == "Scissors"){
    playerScore += 3;
}

compScore=0;
if(result=="Rock"){
    compScore += 1;
} else if(result =="Paper"){
    compScore += 2;
} else if(result == "Scissors"){
    compScore += 3;
}

console.log(compScore, `Computer total is ${compScore} `) 
// console.log just to display that it is working
console.log(playerScore);
return playerScore;
}


promptPlayer()

pointTotal = compScore + playerScore;
console.log(pointTotal); // shows sum of compScore and playerScore





/**
 * pseudocode
 * 
 * add up values of what has been played
 * rock, paper =3
 * rock, scissors =4
 * 
 * paper, rock =3
 * paper, scissors =5
 * 
 * scissors, rock =4
 * scissors, paper =5
 * 
 * 
 * if value== 4 && you played rock, then you win,
 * otherwise you lose (because that means you played scissors instead)
 */



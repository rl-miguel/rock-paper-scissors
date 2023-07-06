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

function promptPlayer(question,a,b,c){
playerChoice= prompt("Rock, Paper or Scissors?");
console.log(playerChoice);

pointTotal=0;

if(playerChoice=="Rock"){
    pointTotal += 1;
} else if(playerChoice =="Paper"){
    pointTotal += 2;
} else if(playerChoice == "Scissors"){
    pointTotal += 3;
}

console.log(pointTotal);
}




promptPlayer()


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



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
playerChoice= prompt("Rock, Paper or Scissors?")
console.log(playerChoice);
}



promptPlayer()





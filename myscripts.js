const a="rock";
const b="paper";
const c="scissors";
let result="";

let computerSelect;


function play(a,b,c){
    computerSelect = Math.random();
    console.log(computerSelect); // this shows result of Math.random 
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

let playerChoice="";
function promptPlayer(question){ //prompts player for choice
playerChoice= prompt("Rock, Paper or Scissors?");
playerChoice= playerChoice.toLowerCase();
console.log(playerChoice);

console.log(`Computer chooses ${result}`);
// console.log just to display that it is working
return playerChoice;
}


promptPlayer()

let playerScore=0;
let compScore=0;
function checkVictory(playerChoice, result){
    alert(`Computer has chosen to play ${result}...`);
   
    if(playerChoice == "rock" && result == "rock"){
        alert("Tie!");
    } else if(playerChoice == "rock" && result == "scissors"){
        alert("You win! Rock beats scissors!");
        playerScore++;
    } else if(playerChoice == "rock" && result == "paper"){
        alert("You lose! Paper beats rock!");
        compScore++;
    }

    if(playerChoice == "paper" && result == "paper"){
        alert("Tie!");
    } else if(playerChoice == "paper" && result == "rock"){
        alert("You win! Paper beats rock!");
        playerScore++;
    } else if(playerChoice == "paper" && result == "scissors"){
        alert("You lose! Scissors beats paper!");
        compScore++;;
    }

    if(playerChoice == "scissors" && result == "scissors"){
        alert("Tie!");
    } else if(playerChoice == "scissors" && result == "paper"){
        alert("You win! Scissors beats paper!");
        playerScore++;
    } else if(playerChoice == "scissors" && result == "rock"){
        alert("You lose! Rock beats scissors!");
        compScore++;;
    }
    
   console.log(`Your current score is ${playerScore}`);
   console.log(`The computer's score is ${compScore}`);
}


checkVictory(playerChoice, result);

function game(a,b,c, question, playerChoice,result){
    play(a,b,c);
    if(computerSelect <=0.3333333333333333333333333333333333333333333333333){
        result= "rock";
    } else if(computerSelect >=0.6666666666666666666666666666666666666666666666666){
        result= "scissors";
    } else{
        result= "paper";
    }
    promptPlayer(question);
    checkVictory(playerChoice, result);
}


game(a,b,c, "Rock, Paper or Scissors?", playerChoice,result)

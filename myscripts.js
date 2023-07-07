const a="Rock";
const b="Paper";
const c="Scissors";
let result="";

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
    
    if(playerChoice == "rock" && result == "Rock"){
        alert("Tie!");
    } else if(playerChoice == "rock" && result == "Scissors"){
        alert("You win! Rock beats scissors!");
        playerScore += 1;
    } else if(playerChoice == "rock" && result == "Paper"){
        alert("You lose! Paper beats rock!");
        compScore +=1;
    }

    if(playerChoice == "paper" && result == "Paper"){
        alert("Tie!");
    } else if(playerChoice == "paper" && result == "Rock"){
        alert("You win! Paper beats rock!");
        playerScore += 1;
    } else if(playerChoice == "paper" && result == "Scissors"){
        alert("You lose! Scissors beats paper!");
        compScore +=1;;
    }

    if(playerChoice == "scissors" && result == "Scissors"){
        alert("Tie!");
    } else if(playerChoice == "scissors" && result == "Paper"){
        alert("You win! Scissors beats paper!");
        playerScore += 1;
    } else if(playerChoice == "scissors" && result == "Rock"){
        alert("You lose! Rock beats scissors!");
        compScore +=1;;
    } else{
        alert("Invalid selection. \nPlease enter 'rock', 'paper' or 'scissors'");
    }

   console.log(`Your current score is ${playerScore}`);
   console.log(`The computer's score is ${compScore}`);
}





checkVictory(playerChoice, result)



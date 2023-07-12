const a="rock";
const b="paper";
const c="scissors";
let compChoice="";
let playerChoice="";
let randomSelect;


function getComputerChoice(a,b,c){
    randomSelect = Math.random();
    console.log(randomSelect); // this shows result of Math.random 
if(randomSelect <=0.3333333333333333333333333333333333333333333333333){
    compChoice= a;
} else if(randomSelect >=0.6666666666666666666666666666666666666666666666666){
    compChoice= c;
} else{
    compChoice= b;
}

console.log(compChoice);
return compChoice;
}


let playerScore=0;
let compScore=0;
let firstTo5=0;
function checkVictory(playerChoice, compChoice){
    alert(`Computer has chosen to play ${compChoice}...`);

    if(playerChoice == "rock" && compChoice == "rock"){
        alert("Tie!");
    } else if(playerChoice == "rock" && compChoice == "scissors"){
        alert("You win! Rock beats scissors!");
        playerScore++;
    } else if(playerChoice == "rock" && compChoice == "paper"){
        alert("You lose! Paper beats rock!");
        compScore++;
    }

    if(playerChoice == "paper" && compChoice == "paper"){
        alert("Tie!");
    } else if(playerChoice == "paper" && compChoice == "rock"){
        alert("You win! Paper beats rock!");
        playerScore++;
    } else if(playerChoice == "paper" && compChoice == "scissors"){
        alert("You lose! Scissors beats paper!");
        compScore++;;
    }

    if(playerChoice == "scissors" && compChoice == "scissors"){
        alert("Tie!");
    } else if(playerChoice == "scissors" && compChoice == "paper"){
        alert("You win! Scissors beats paper!");
        playerScore++;
    } else if(playerChoice == "scissors" && compChoice == "rock"){
        alert("You lose! Rock beats scissors!");
        compScore++;;
    }
    
   console.log(`Your current score is ${playerScore}`);
   console.log(`The computer's score is ${compScore}`);

   if(playerScore == 5){
    firstTo5 = playerScore;
    alert("You have won 5 rounds of Rock paper scissors.");
   } else if(compScore == 5){
    firstTo5 = compScore;
    alert("The computer has won 5 rounds of Rock paper scissors.");
   }
  
}

const buttons= document.getElementsByTagName('button')
buttons[0].addEventListener('click', ()=>{
    playerChoice="rock";
    game()
});



buttons[1].addEventListener('click',()=>{
    playerChoice="paper";
    game()
});

buttons[2].addEventListener('click',()=>{
    playerChoice="scissors";
    game()
});


let gamesPlayed=0;
function game(){
    getComputerChoice(a,b,c);
    
    checkVictory(playerChoice, compChoice);
    return gamesPlayed;
}

/**

 * let playerChoice="";
function promptPlayer(){ //prompts player for choice
playerChoice= prompt("Rock, paper or scissors?");
playerChoice= playerChoice.toLowerCase();
console.log(playerChoice);

console.log(`Computer chooses ${compChoice}`);
// console.log just to display that it is working
return playerChoice;
} */
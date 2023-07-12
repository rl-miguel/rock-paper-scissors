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

    if(playerChoice == "rock" && compChoice == "rock"){
    } else if(playerChoice == "rock" && compChoice == "scissors"){
        playerScore++;
    } else if(playerChoice == "rock" && compChoice == "paper"){
        compScore++;
    }

    if(playerChoice == "paper" && compChoice == "paper"){
    } else if(playerChoice == "paper" && compChoice == "rock"){
        playerScore++;
    } else if(playerChoice == "paper" && compChoice == "scissors"){
        compScore++;;
    }

    if(playerChoice == "scissors" && compChoice == "scissors"){
    } else if(playerChoice == "scissors" && compChoice == "paper"){
        playerScore++;
    } else if(playerChoice == "scissors" && compChoice == "rock"){
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

function removeEvent(){
    playerChoice="";
    compChoice="";
}
function game(){
    if(playerScore==5 || compScore==5){
        return;
    }
    getComputerChoice(a,b,c);
    checkVictory(playerChoice, compChoice);

    const body = document.querySelector('body');

let choiceString = document.createElement('div');
choiceString.style.marginTop='8px';
choiceString.style.marginBottom='30px';
choiceString.style.padding='10px';
choiceString.style.marginLeft='600px';
choiceString.style.marginRight='600px';
choiceString.style.backgroundColor='#ebe1e1';
choiceString.textContent=`You choose ${playerChoice} and the computer has chosen
                         to play ${compChoice}. Your current score is ${playerScore}
                         and the computer's current score is ${compScore}`;



body.appendChild(choiceString);
}



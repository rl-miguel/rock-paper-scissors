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
function promptPlayer(question,a,b,c){ //prompts player for choice
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
        pointTotal += 1;
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
    }
    
    
    

   

    //NOTE to self: may need to use a NOT ! operator on some instances, to resolve bug
    // delete after fixed
    // rock + rock =2 which isn't accounted for
    //maybe I should scrap the whole thing and do an IF statement
    // e.g. if playerChoice ="Rock" && result == "Rock", alert(Tie)

    // switch statement, if(winCondition) += 1 to winTotal
    //if Tie += 0
    //if lose +=1 to compWinTotal
   
}



checkVictory(playerChoice, result)







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



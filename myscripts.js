const a="Rock";
const b="Paper";
const c="Scissors";
let result="";
let playerChoice=""

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

console.log(`Computer chooses ${result}`);
// console.log just to display that it is working
return;
}


promptPlayer()


function checkVictory(playerChoice, result){
    alert(`Computer has chosen to play ${result}...`);
    
    if(playerChoice == "Rock" && result == "Rock"){
        alert("Tie!");
    } else if(playerChoice == "Rock" && result == "Scissors"){
        alert("You win! Rock beats scissors!");
    } else if(playerChoice == "Rock" && result == "Paper"){
        alert("You lose! Paper beats rock!");
    }

    if(playerChoice == "Paper" && result == "Paper"){
        alert("Tie!");
    } else if(playerChoice == "Paper" && result == "Rock"){
        alert("You win! Paper beats rock!");
    } else if(playerChoice == "Paper" && result == "Scissors"){
        alert("You lose! Scissors beats paper!");
    }

    if(playerChoice == "Scissors" && result == "Scissors"){
        alert("Tie!");
    } else if(playerChoice == "Scissors" && result == "Paper"){
        alert("You win! Scissors beats paper!");
    } else if(playerChoice == "Scissors" && result == "Rock"){
        alert("You lose! Rock beats scissors!");
    }
   

    //NOTE to self: may need to use a NOT ! operator on some instances, to resolve bug
    // delete after fixed
    // rock + rock =2 which isn't accounted for
    //maybe I should scrap the whole thing and do an IF statement
    // e.g. if playerChoice ="Rock" && result == "Rock", alert(Tie)
   
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



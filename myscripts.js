const a="Rock";
const b="Paper";
const c="Scissors";
let result="";

let computerSelect = Math.random();

console.log(computerSelect); // this shows result of Math.random 
if(computerSelect <=0.3333333333333333333333333333333333333333333333333){
    result= a;
} else if(computerSelect >=0.6666666666666666666666666666666666666666666666666){
    result= c;
} else{
    result= b;
}

console.log(result)

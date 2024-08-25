console.log("hello");
let getComputerChoice=function(){
    let x= Math.floor(Math.random()*30);
    console.log(x)
    if(x>=0 && x<10){
        return "rock";
    }
    else if(x>=10 && x<20){
        return "paper";
    }
    else if(x>=20 && x<30){
        return "scissor";
    }
}
let  getHumanChoice=function(){
    let y=prompt("choose your hand");
    return y;
}
let playRound=function(f,j){
    if ( f.toUpperCase() === "ROCK"){
         if(j.toUpperCase() === "ROCK"){
            return 2
         }                    //first case rock=rock draw
         else if(j.toUpperCase() === "SCISSOR"){
            return 1
         }                    //second case rock vs scissor cp lose
         else if(j.toUpperCase() === "PAPER"){
            return 0
         }                    //third case rock vs paper human lose
    }                                    //ROCK CASE
    else if ( f.toUpperCase() === "PAPER"){
        if(j.toUpperCase() === "ROCK"){
            return 1
         }                    //first case paper vs rock human win
         else if(j.toUpperCase() === "SCISSOR"){
            return 0
         }                    //second case paper vs scissor human lost
         else if(j.toUpperCase() === "PAPER"){
            return 2
         }                    //third case paper vs papaer draw
    }
    else if ( f.toUpperCase() === "SCISSOR"){
        if(j.toUpperCase() === "ROCK"){
            return 0
         }                    //first case scissor vs rock computer win
         else if(j.toUpperCase() === "SCISSOR"){
            return 2
         }                    //second case scisspr vs scissor draw
         else if(j.toUpperCase() === "PAPER"){
            return 1
         }                    //third case scissor vs papaer human win
    }
}
let playGame=function(k,l){
        let q=playRound(k , l)
        if(q==0){
            return 0
        }
        else if(q==1){
          return 1
        }
        else {
            return 2
        }
    }
let computerScore=0;
let humanScore=0;
for(let i=0;i<5;i++){
    let computer=getComputerChoice();
    let human=getHumanChoice();
    console.log("computer :", computer)
    console.log("human :", human)
    let nu=playGame(human , computer)
    if(nu ==1){
        humanScore++
    }
    else if(nu==0){
        computerScore++
    }
    }
if(computerScore > humanScore){
      console.log("you lost")
}
else if(humanScore>computerScore){
        console.log("you win")
}
else {
        console.log("draw")
}
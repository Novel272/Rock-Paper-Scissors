const scissor1 = document.querySelector("#scissor");
const paper1 = document.querySelector("#paper");
const rock1 = document.querySelector("#rock");
const start1=document.querySelector("#start");
const pa=document.querySelector('p');
console.log("hello");
let getComputerChoice=function(){
    let x= Math.floor(Math.random()*30);
    if(x>=0 && x<10){
        console.log("computer :rock");
        return "rock";
    }
    else if(x>=10 && x<20){
        console.log("computer :paper");
        return "paper";
    }
    else if(x>=20 && x<30){
        console.log("computer :scissor");
        return "scissor";
    }
}


let playRound=function(f,j){
    if ( f.toUpperCase() === "ROCK"){
         if(j.toUpperCase() === "ROCK"){
            console.log("draw");
            return 2
         }                    //first case rock=rock draw
         else if(j.toUpperCase() === "SCISSOR"){
            console.log("computer lose");
            return 1
         }                    //second case rock vs scissor cp lose
         else if(j.toUpperCase() === "PAPER"){
            console.log("human lose");
            return 0
         }                    //third case rock vs paper human lose
    }                                    //ROCK CASE
    else if ( f.toUpperCase() === "PAPER"){
        if(j.toUpperCase() === "ROCK"){
            console.log("human win");
            return 1
         }                    //first case paper vs rock human win
         else if(j.toUpperCase() === "SCISSOR"){
            console.log("human lose");
            return 0
         }                    //second case paper vs scissor human lost
         else if(j.toUpperCase() === "PAPER"){
            console.log("draw");
            return 2
         }                    //third case paper vs papaer draw
    }
    else if ( f.toUpperCase() === "SCISSOR"){
        if(j.toUpperCase() === "ROCK"){
            console.log("computer win");
            return 0
         }                    //first case scissor vs rock computer win
         else if(j.toUpperCase() === "SCISSOR"){
            console.log("draw");
            return 2
         }                    //second case scisspr vs scissor draw
         else if(j.toUpperCase() === "PAPER"){
            console.log("human win");
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
let h=0;
let c=0;
let human='';


console.log("lets get started");


scissor1.addEventListener('click',() => {
    human="scissor";
    console.log("human : scissor");
    let computer=getComputerChoice();
    let nu=playGame(human , computer)
    human=""
    if(nu ==1){
        humanScore++
        h++
        console.log("human score:",h);
        human="";
    }
    else if(nu==0){
        computerScore++
        c++
        console.log("computer score:",c);
        human="";
    }
    if(c==5){
        const pa=document.querySelector('p');
        if(computerScore > humanScore){
              console.log("you lost")
              pa.textContent='you lost'
        }
        }
        else if(h==5){
         if(humanScore>computerScore){
                console.log("you win")
                pa.textContent='you win'
        }
        }
});
paper1.addEventListener('click',() => {
    human="paper";
    console.log("human : paper");
    let computer=getComputerChoice();
    let nu=playGame(human , computer)
    human=""
    if(nu ==1){
        humanScore++
        h++
        console.log("human score:",h);
        human="";
    }
    else if(nu==0){
        computerScore++
        c++
        console.log("computer score:",c);
        human="";
    }
    if(c==5){
        const pa=document.querySelector('p');
        if(computerScore > humanScore){
              console.log("you lost")
              pa.textContent='you lost'
        }
        }
        else if(h==5){
         if(humanScore>computerScore){
                console.log("you win")
                pa.textContent='you win'
        }
        }
});
rock1.addEventListener('click',() => {
    human="rock";
    console.log("human : rock");
    let computer=getComputerChoice();
    let nu=playGame(human , computer)
    human=""
    if(nu ==1){
        humanScore++
        h++
        console.log("human score:",h);
        human="";
    }
    else if(nu==0){
        computerScore++
        c++
        console.log("computer score",c);
        human="";
    }
    if(c==5){
        const pa=document.querySelector('p');
        if(computerScore > humanScore){
              console.log("you lost")
              pa.textContent='you lost'
        }
        }
        else if(h==5){
         if(humanScore>computerScore){
                console.log("you win")
                pa.textContent='you win'
        }
        }
});
human="";

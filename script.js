// a function that creates a computer play -> he sends to you a rock, paper or scissors
// a function that creates your play -> a popup window if the user doesn't input a valid move
// a function that takes computers game and your game
// a function that decides who won the game !
// a function that envolves a single game

function getCPUPlay(){
    let computerMove = Math.floor(Math.random()*(3)+1);
    if(computerMove===1){
        return "rock";
    }else if (computerMove===2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanPlay(){
    while(goodMove==false){
        let humanMove = prompt("Please enter your move:");
        goodMove = validateMove(humanMove.toLowerCase());
    }
}


// make game case-insensitive
// make a return of the game

// happy codding :leocheers:
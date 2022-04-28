// a function that creates a computer play -> he sends to you a rock, paper or scissors
// a function that creates your play -> a popup window if the user doesn't input a valid move
// a function that is a round game between computer and you
// a function that decides who won the round!
// a function that games 5 rounds and decide winner
// a function that decides who won the game!

function gameRound(){ //function where the computer and the human battles to death at rps :D
    let computerSelection = getCPUPlay();
    console.log(computerSelection);
    let humanSelection = getHumanPlay();
    roundWinner(computerSelection, humanSelection);
}

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
    let goodMove = false;
    let humanMove = "";
    while(goodMove==false){
        humanMove = prompt("Please enter your move:");
        goodMove = validateMove(humanMove.toLowerCase());
    }
    return humanMove;
}

function validateMove(move){
    switch(move){
        case "rock":
            return goodMove();
        case "paper":
            return goodMove();
        case "scissors":
            return goodMove();
        default:
            return badMove();
    }
}

function goodMove(){
    alert("You selected your move. Let's see what evils CPU does");
    return true;
}

function badMove(){
    alert("Bad move! Please try again:");
    return false;
}

function roundWinner(cpuPlay, humanPlay){
    if (cpuPlay === humanPlay){
        return ("Tie game");
    }else if (cpuPlay === "rock" && humanPlay === "scissors"){
        return "Rock beats scissors. Computer won this round!"
    }else if (cpuPlay === "rock" && humanPlay === "paper"){
        return "Paper beats rock. You won this round!"
    }else if (cpuPlay === "paper" && humanPlay === "rock"){
        return "Paper beats rock. Computer won this round!"
    }else if (cpuPlay === "paper" && humanPlay === "scissors"){
        return"Scissors beats paper. You won this round!"
    }else if (cpuPlay === "scissors" && humanPlay === "rock"){
        return"Rock beats scissors. You won this round!"
    }else if (cpuPlay === "scissors" && humanPlay === "paper"){
        return"Scissors beats paper. Computer won this round!"
    }
}

// make game case-insensitive
// make a return of the game

// happy codding :leocheers:
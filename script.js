// a function that creates a computer play -> he sends to you a rock, paper or scissors
// a function that creates your play -> a popup window if the user doesn't input a valid move
// a function that is a round game between computer and you
// a function that decides who won the round!
// a function that games 5 rounds and decide winner
// a function that decides who won the game!
// make game case-insensitive
// make a return of the game

// happy codding :leocheers:

mainGame();

function mainGame(){
    let cpuPoints = 0;
    let humanPoints = 0;
    for (let i = 0; i<5;i++){
        let pointsWinner = gameRound();
        (pointsWinner=="cpu") ? cpuPoints++ : humanPoints++;
    }
    declareWinner(cpuPoints,humanPoints);
}

function gameRound(){ //function where the computer and the human battles to death at rps :D
    let computerSelection = getCPUPlay();
    let humanSelection = getHumanPlay();
    let winner = roundWinner(computerSelection, humanSelection);
    if (winner == "tie"){
        gameRound();
    }
    return winner;
}

function declareWinner(cpuPoints,humanPoints){
    (cpuPoints>humanPoints) ? alert("Computer won the game! =(") : alert("You won the game! Congrats =)");
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
        alert("Tie game. Let's play this round again!");
        return "tie"
    }else if (cpuPlay === "rock" && humanPlay === "scissors"){
        alert("Rock beats scissors. Computer won this round! D:");
        return "cpu"
    }else if (cpuPlay === "rock" && humanPlay === "paper"){
        alert("Paper beats rock. You won this round! :D");
        return "human"
    }else if (cpuPlay === "paper" && humanPlay === "rock"){
        alert("Paper beats rock. Computer won this round! D:");
        return "cpu"
    }else if (cpuPlay === "paper" && humanPlay === "scissors"){
        alert("Scissors beats paper. You won this round! :D");
        return "human"
    }else if (cpuPlay === "scissors" && humanPlay === "rock"){
        alert("Rock beats scissors. You won this round! :D");
        return "human"
    }else if (cpuPlay === "scissors" && humanPlay === "paper"){
        alert("Scissors beats paper. Computer won this round! D:");
        return "cpu"
    }
}
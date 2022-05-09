// reestructure there is not mainGame anymore, also there is not prompt function anymore. delete them
// now there are rounds that are triggered by an event each one
// this event declare a winner for that round (not mainGame anymore)
// also at the end of the event there is a conditional that checks points 
// if pc or human reachs 3 points declare a winner



// mainGame();

function gameRound(){ //function where the computer and the human battles to death at rps :D
    let computerSelection = getCPUPlay();
    let humanSelection = getHumanPlay();
    let winner = roundWinner(computerSelection, humanSelection);
    if (winner == "tie"){
        gameRound();
    }
    return winner;
}

function declareWinner(){
    
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


function createButtonEventListeners(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",gameRound);
    });
}
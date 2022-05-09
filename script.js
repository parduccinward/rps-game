// reestructure there is not mainGame anymore, also there is not prompt function anymore. delete them
// now there are rounds that are triggered by an event each one
// this event declare a winner for that round (not mainGame anymore)
// also at the end of the event there is a conditional that checks points 
// if pc or human reachs 3 points declare a winner

makeButtonsClickable();


function playGameRound(e){ //function where the computer and the human battles to death at rps :D
    let humanPlay = e.target.id;
    let computerPlay = getCPUPlay();
    refreshGameImages(humanPlay, computerPlay);
    let winner = getRoundWinner(humanPlay, computerPlay);
    console.log(winner);
}

function declareWinner(){
    
}


function getCPUPlay(){
    let computerPlay = Math.floor(Math.random()*(3)+1);
    if(computerPlay===1){
        return "rock";
    }else if (computerPlay===2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getRoundWinner(humanPlay, cpuPlay){
    if (cpuPlay === humanPlay){
        refreshGameText("Tie game. Let's play this round again!");
        return "tie"
    }else if (cpuPlay === "rock" && humanPlay === "scissors"){
        refreshGameText("Rock beats scissors. Computer won this round! D:");
        return "cpu"
    }else if (cpuPlay === "rock" && humanPlay === "paper"){
        refreshGameText("Paper beats rock. You won this round! :D");
        return "human"
    }else if (cpuPlay === "paper" && humanPlay === "rock"){
        refreshGameText("Paper beats rock. Computer won this round! D:");
        return "cpu"
    }else if (cpuPlay === "paper" && humanPlay === "scissors"){
        refreshGameText("Scissors beats paper. You won this round! :D");
        return "human"
    }else if (cpuPlay === "scissors" && humanPlay === "rock"){
        refreshGameText("Rock beats scissors. You won this round! :D");
        return "human"
    }else if (cpuPlay === "scissors" && humanPlay === "paper"){
        refreshGameText("Scissors beats paper. Computer won this round! D:");
        return "cpu"
    }
}


function makeButtonsClickable(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",playGameRound);
    });
}

function refreshGameText(string){
    const text = document.querySelector(".result-container");
    text.textContent = string;
}

function refreshGameImages(humanPlay, computerPlay){
    const humanImage = document.querySelector(".human-play img");
    if(humanPlay === "rock"){
        humanImage.setAttribute("src","images/rock-fffdfa.png");
    }else if (humanPlay === "paper"){
        humanImage.setAttribute("src","images/paper-fffdfa.png");
    }else{
        humanImage.setAttribute("src","images/scissors-fffdfa.png");
    }
    const cpuImage = document.querySelector(".cpu-play img");
    if(computerPlay === "rock"){
        cpuImage.setAttribute("src","images/rock-fffdfa.png");
    }else if (computerPlay === "paper"){
        cpuImage.setAttribute("src","images/paper-fffdfa.png");
    }else{
        cpuImage.setAttribute("src","images/scissors-fffdfa.png");
    }
}




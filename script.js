
let cpuPoints = 0;
let humanPoints = 0;
startGame();

function playGameRound(e){ //function where the computer and the human battles to death at rps :D
    let humanPlay = e.target.id;
    let computerPlay = getCPUPlay();
    refreshGameImages(humanPlay, computerPlay);
    let winner = getRoundWinner(humanPlay, computerPlay);
    addPointToWinner(winner);
    checkWinner();
}

function checkWinner(){
    if(cpuPoints < 5 && humanPoints < 5) return;

    if(cpuPoints >= 5){
        finishGame("CPU WON...");
    }else if (humanPoints >= 5){
        finishGame("YOU WON!!! :D");
    }
}

function startGame(){
    makeButtonsClickable();
}

function restartGame(){
    restartPoints();
    removePlayAgainButton();
    makeButtonsClickable();
}

function finishGame(message){
    refreshGameText(message);
    lockPlayingButtons();
    addPlayAgainButton();
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
        button.disabled = false;
        button.addEventListener("click",playGameRound);
    });
}


function lockPlayingButtons(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

function addPlayAgainButton(){
    const layoutContainer = document.querySelector(".layout-container");
    const playAgainBtn = createPlayAgainButton();
    layoutContainer.appendChild(playAgainBtn);
}

function removePlayAgainButton(){
    const layoutContainer = document.querySelector(".layout-container");
    const playAgainBtn = document.querySelector(".play-again");
    layoutContainer.removeChild(playAgainBtn);
}


function createPlayAgainButton(){
    const playAgainBtn = document.createElement("button");
    playAgainBtn.classList.add("play-again")
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.addEventListener("click",restartGame)
    return playAgainBtn;
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

function addPointToWinner(winner){
    const windowHumanScore = document.querySelector(".human-score");
    const windowCpuScore = document.querySelector(".cpu-score");
    updatePoints(winner);
    if(winner === "cpu"){
        windowCpuScore.textContent=cpuPoints
    }else{
        windowHumanScore.textContent = humanPoints
    }
}

function restartPoints(){
    const windowHumanScore = document.querySelector(".human-score");
    windowHumanScore.textContent= "0";
    const windowCpuScore = document.querySelector(".cpu-score");
    windowCpuScore.textContent= "0";
    cpuPoints = 0;
    humanPoints = 0;
}

function updatePoints(winner){
    if (winner === "tie"){
        return;
    }else if (winner === "cpu"){
        cpuPoints++;
        return cpuPoints;
    }else{
        humanPoints++;
        return humanPoints;
    }
}






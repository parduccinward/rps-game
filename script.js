// a function that creates a computer play -> he sends to you a rock, paper or scissors
// a function that creates your play
// a function that takes computers game and your game
// a function that decides who won the game !
// a function that envolves a single game

function computerPlay(){
    let randomValue = Math.floor(Math.random()*(3)+1);
    if(randomValue===1){
        return "rock";
    }else if (randomValue===2){
        return "paper";
    }else{
        return "scissors";
    }
}





// make game case-insensitive
// make a return of the game

// happy codding :leocheers:
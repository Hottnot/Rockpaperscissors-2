// this let's computer do a random choice.

function computerPlay(){
    const randomChoice = Math.floor((Math.random() * 3 ));
    return choices[randomChoice];
}

// This function playes a single round and declares a winner with points for each player

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++;
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerScore++;
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else {
        computerScore++;
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    }   
} 

//These are my declared variables.

const choices = ["ROCK", "PAPER", "SCISSORS",];
let playerScore = parseInt(0);
let computerScore = parseInt(0);

//This makes sure we only play 5 rounds and show's scores

for(var i=0;i<5;i++){
    const computerSelection = computerPlay();
    let playerSelection = prompt ("Choose Rock, Paper or Scissors").toUpperCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
}



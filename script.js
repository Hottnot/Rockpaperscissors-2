const choices = ["ROCK", "PAPER", "SCISSORS",];

const playerSelection = prompt ("Choose Rock, Paper or Scissors").toUpperCase();
const computerSelection = computerPlay();

function computerPlay(){
    const randomChoice = Math.floor((Math.random() * 3 ));
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
   // let playerSelection = prompt ("Choose Rock, Paper or Scissors").toUpperCase();

    if (playerSelection === "ROCK", computerSelection === "ROCK") {
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection === "ROCK", computerSelection === "PAPER") {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "ROCK", computerSelection === "SCISSORS") {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "PAPER", computerSelection === "PAPER"){
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection === "PAPER", computerSelection === "ROCK"){
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "PAPER", computerSelection === "SCISSORS"){
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "SCISSORS", computerSelection === "SCISSORS"){
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection === "SCISSORS", computerSelection === "PAPER"){
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    }
} 



console.log(playRound(playerSelection, computerSelection));


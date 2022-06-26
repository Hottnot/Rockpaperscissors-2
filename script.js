const choices = ["ROCK", "PAPER", "SCISSORS",];


const computerSelection = computerPlay();
const playerSelection = prompt ("Choose Rock, Paper or Scissors").toUpperCase();
//console.log(playerSelection);

function computerPlay(){
    const randomChoice = Math.floor((Math.random() * 3 ));
    return choices[randomChoice];
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection){
   // 
    //const playerSelection = prompt ("Choose Rock, Paper or Scissors").toUpperCase();
    if (playerSelection === computerSelection) {
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    }
} 

console.log(playRound(playerSelection, computerSelection));


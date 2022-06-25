const choices = ["ROCK", "PAPER", "SCISSORS",];
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

/*"ROCK" > "SCISSORS";
"SCISSORS" > "PAPER";
"PAPER" > "ROCK";*/

//const playerSelection = userChoice;
//const computerSelection = computerPlay();

function computerPlay(){
    const randomChoice = Math.floor((Math.random() * 3 ));
    return choices[randomChoice];
};
//console.log(computerPlay());

function playerSelection(){
    let yourChoice = prompt ("Choose Rock, Paper or Scissors").toUpperCase();
    return yourChoice;
}
//console.log(playerSelection());

function playRound(playerSelection, computerPlay){
    if (playerSelection > computerPlay){
        return ("You win! " + playerSelection + " beats " + computerPlay + ".");
    } else if (playerSelection < computerPlay){
        return ("You lose! " + computerPlay + " beats " + playerSelection + ".");
    } else {
        return ("It's a draw. Both chose " + playerSelection + ".");
    }
}
   

console.log(playRound(playerSelection(), computerPlay()));
//console.log(playRound());
//console.log(playRound());
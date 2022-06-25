const choices = ["ROCK", "PAPER", "SCISSORS",];
/*const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";*/

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
    if (playerSelection = "ROCK", computerPlay = "SCISSORS"){
        return ("You win! " + playerSelection + " beats " + computerPlay + ".");
    } else if (playerSelection = "ROCK", computerPlay = "PAPER"){
        return ("You lose! " + computerPlay + " beats " + playerSelection + ".");
    } else if (playerSelection = "ROCK", computerPlay = "ROCK") {
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection = "PAPER", computerPlay = "PAPER"){
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection = "PAPER", computerPlay = "ROCK"){
        return ("You win! " + playerSelection + " beats " + computerPlay + ".");
    } else if (playerSelection = "PAPER", computerPlay = "SCISSORS"){
        return ("You lose! " + computerPlay + " beats " + playerSelection + ".");
    } else if (playerSelection = "SCISSORS", computerPlay = "SCISSORS"){
        return ("It's a draw. Both chose " + playerSelection + ".");
    } else if (playerSelection = "SCISSORS", computerPlay = "PAPER"){
        return ("You win! " + playerSelection + " beats " + computerPlay + ".");
    } else {
        return ("You lose! " + computerPlay + " beats " + playerSelection + ".");
    }
}
   

console.log(playRound(playerSelection(), computerPlay()));
//console.log(playRound());
//console.log(playRound());
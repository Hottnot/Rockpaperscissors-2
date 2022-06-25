const choices = ["ROCK", "PAPER", "SCISSORS",];
/*const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";*/

/*"ROCK" > "SCISSORS";
"SCISSORS" > "PAPER";
"PAPER" > "ROCK";*/

const playerChoice = playerSelection();
const computerSelection = computerPlay();

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

function playRound(playerChoice, computerSelection){
    if (playerChoice == "ROCK", computerSelection == "SCISSORS") {
        return ("You win! " + playerChoice + " beats " + computerSelection + ".");
    } else if (playerChoice == "ROCK", computerSelection == "PAPER") {
        console.log("You lose! " + computerSelection + " beats " + playerChoice + ".");
    } else if (playerChoice == "ROCK", computerSelection == "ROCK") {
        console.log("It's a draw. Both chose " + playerChoice + ".");
    } else if (playerChoice == "PAPER", computerSelection == "PAPER"){
        console.log("It's a draw. Both chose " + playerChoice + ".");
    } else if (playerChoice == "PAPER", computerSelection == "ROCK"){
        console.log("You win! " + playerChoice + " beats " + computerSelection + ".");
    } else if (playerChoice == "PAPER", computerSelection == "SCISSORS"){
        console.log("You lose! " + computerSelection + " beats " + playerChoice + ".");
    } else if (playerChoice == "SCISSORS", computerSelection == "SCISSORS"){
        console.log("It's a draw. Both chose " + playerChoice + ".");
    } else if (playerChoice == "SCISSORS", computerSelection == "PAPER"){
        console.log("You win! " + playerChoice + " beats " + computerSelection + ".");
    } else {
        console.log("You lose! " + computerSelection + " beats " + playerChoice + ".");
    }
}
   

console.log(playRound(playerChoice, computerSelection));
//console.log(playRound());
//console.log(playRound());
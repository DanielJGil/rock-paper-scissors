function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomChoice = options[(Math.floor(Math.random() * options.length))];
    return randomChoice;
}

playerInput = prompt("Enter your choice!").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a draw! Try again!";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"
    }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerInput, computerSelection));

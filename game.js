function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomChoice = options[(Math.floor(Math.random() * options.length))];
    return randomChoice;
}

playerInput = prompt("Enter your choice!");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw! Try again!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"
    }

}

const computerSelection = getComputerChoice();
console.log(playRound(playerInput, computerSelection));

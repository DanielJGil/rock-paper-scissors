function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomChoice = options[(Math.floor(Math.random() * options.length))];
    console.log(randomChoice);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("Try again!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("Try again!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Try again!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors");
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
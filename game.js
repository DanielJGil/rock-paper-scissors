let playerScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {

    function getComputerChoice() {
        let options = ["Rock", "Paper", "Scissors"];
        let randomChoice = options[(Math.floor(Math.random() * options.length))];
        return randomChoice;
    }

    let playerInput = prompt("Enter your choice!").toLowerCase();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection.toLowerCase()) {
            return "It's a draw! Try again!";
        } else if (playerSelection === "rock" && computerSelection === "Paper") {
            computerScore++
            return "You Lose! Paper beats Rock";
        } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            playerScore++
            return "You Win! Rock beats Scissors";
        } else if (playerSelection === "paper" && computerSelection === "Rock") {
            playerScore++
            return "You Win! Paper beats Rock";
        } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            computerScore++
            return "You Lose! Scissors beats Paper";
        } else if (playerSelection === "scissors" && computerSelection === "Paper") {
            playerScore++
            return "You Win! Scissors beats Paper";
        } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            computerScore++
            return "You Lose! Rock beats Scissors";
        }
    }

    const computerSelection = getComputerChoice();
    let result = playRound(playerInput, computerSelection);
    console.log(result);
    console.log(`Your score is now ${playerScore}/${computerScore}`);

    // if (result === "It's a draw! Try again!") {
    //     console.log(result);
    //     console.log(`Your score is now ${playerScore}/${computerScore}`);
    // } else if (result === "You Win! Rock beats Scissors" || "You Win! Paper beats Rock" || "You Win! Scissors beats Paper") {
    //     console.log(result);
    //     playerScore++;
    //     console.log(`Your score is now ${playerScore}/${computerScore}`);
    // } else if (result === "You Lose! Rock beats Scissors" || "You Lose! Paper beats Rock" || "You Lose! Scissors beats Paper") {
    //     console.log(result);
    //     computerScore++;
    //     console.log(`Your score is now ${playerScore}/${computerScore}`);
    // }
}


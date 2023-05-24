let playerScore = 0;
let computerScore = 0;
playing = true;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerPoints = document.querySelector(".playerscore");
const computerPoints = document.querySelector(".computerscore");
const playerChoiceRock = document.querySelector(".playerchoice--0");
const playerChoicePaper = document.querySelector(".playerchoice--1");
const playerChoiceScissors = document.querySelector(".playerchoice--2");
// const computerChoiceRock = document.querySelector(".computerchoice--0");
// const computerChoicePaper = document.querySelector(".computerchoice--1");
// const computerChoiceScissors = document.querySelector(".computerchoice--2");
const computerChoice = document.querySelector(".rightimg");
const mainText = document.querySelector(".maintext");

rock.addEventListener("click", function () {
  playerChoiceRock.style.display = "block";
  playerChoicePaper.style.display = "none";
  playerChoiceScissors.style.display = "none";

  const compChoice = Math.trunc(Math.random() * 3);

  computerChoice.classList.remove("hidden");
  computerChoice.src = `img/${compChoice}.png`;

  if (compChoice === 2) {
    mainText.textContent = "You win! Rock beats Scissors!";
    playerScore++;
    playerPoints.textContent = playerScore;
  } else if (compChoice === 1) {
    mainText.textContent = "You lose! Paper beats Rock!";
    computerScore++;
    computerPoints.textContent = computerScore;
  } else if (compChoice === 0) {
    mainText.textContent = "It's a draw!";
  }
});

paper.addEventListener("click", function () {
  playerChoicePaper.style.display = "block";
  playerChoiceRock.style.display = "none";
  playerChoiceScissors.style.display = "none";

  const compChoice = Math.trunc(Math.random() * 3);

  computerChoice.classList.remove("hidden");
  computerChoice.src = `img/${compChoice}.png`;

  if (compChoice === 0) {
    mainText.textContent = "You win! Paper beats Rock!";
    playerScore++;
    playerPoints.textContent = playerScore;
  } else if (compChoice === 2) {
    mainText.textContent = "You lose! Scissors beats Paper!";
    computerScore++;
    computerPoints.textContent = computerScore;
  } else if (compChoice === 1) {
    mainText.textContent = "It's a draw!";
  }
});

scissors.addEventListener("click", function () {
  playerChoiceScissors.style.display = "block";
  playerChoicePaper.style.display = "none";
  playerChoiceRock.style.display = "none";

  const compChoice = Math.trunc(Math.random() * 3);

  computerChoice.classList.remove("hidden");
  computerChoice.src = `img/${compChoice}.png`;

  if (compChoice === 0) {
    mainText.textContent = "You lose! Rock beats Scissors!";
    computerScore++;
    computerPoints.textContent = computerScore;
  } else if (compChoice === 1) {
    mainText.textContent = "You win! Scissors beats paper!";
    playerScore++;
    playerPoints.textContent = playerScore;
  } else if (compChoice === 2) {
    mainText.textContent = "It's a draw!";
  }
});

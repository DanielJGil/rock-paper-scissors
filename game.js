let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerPoints = document.querySelector(".playerscore");
const computerPoints = document.querySelector(".computerscore");
const playerChoiceRock = document.querySelector(".playerchoice--0");
const playerChoicePaper = document.querySelector(".playerchoice--1");
const playerChoiceScissors = document.querySelector(".playerchoice--2");
const computerChoice = document.querySelector(".rightimg");
const mainText = document.querySelector(".maintext");
const body = document.querySelector("body");
const newGame = document.querySelector(".newgame");

const result = function () {
  if (playerScore === 5) {
    mainText.textContent = "CONGRATULATIONS! YOU WON!";
    body.classList.add("wingame");
  } else if (computerScore === 5) {
    mainText.textContent = "YOU LOST! UNLUCKY!";
    body.classList.add("losegame");
    newGame.classList.add("endgamebtn");
  }
};

rock.addEventListener("click", function () {
  if (playerScore !== 5 && computerScore !== 5) {
    playerChoiceRock.style.display = "block";
    playerChoicePaper.style.display = "none";
    playerChoiceScissors.style.display = "none";

    const compChoice = Math.trunc(Math.random() * 3);

    computerChoice.classList.remove("hidden");
    computerChoice.src = `img/${compChoice}.png`;

    if (compChoice === 2) {
      mainText.textContent = "You win! Rock wins!";
      playerScore++;
      playerPoints.textContent = playerScore;
      result();
    } else if (compChoice === 1) {
      mainText.textContent = "You lose! Paper wins!";
      computerScore++;
      computerPoints.textContent = computerScore;
      result();
    } else if (compChoice === 0) {
      mainText.textContent = "It's a draw!";
    }
  }
});

paper.addEventListener("click", function () {
  if (playerScore !== 5 && computerScore !== 5) {
    playerChoicePaper.style.display = "block";
    playerChoiceRock.style.display = "none";
    playerChoiceScissors.style.display = "none";

    const compChoice = Math.trunc(Math.random() * 3);

    computerChoice.classList.remove("hidden");
    computerChoice.src = `img/${compChoice}.png`;

    if (compChoice === 0) {
      mainText.textContent = "You win! Paper wins!";
      playerScore++;
      playerPoints.textContent = playerScore;
      result();
    } else if (compChoice === 2) {
      mainText.textContent = "You lose! Scissors wins!";
      computerScore++;
      computerPoints.textContent = computerScore;
      result();
    } else if (compChoice === 1) {
      mainText.textContent = "It's a draw!";
    }
  }
});

scissors.addEventListener("click", function () {
  if (playerScore !== 5 && computerScore !== 5) {
    playerChoiceScissors.style.display = "block";
    playerChoicePaper.style.display = "none";
    playerChoiceRock.style.display = "none";

    const compChoice = Math.trunc(Math.random() * 3);

    computerChoice.classList.remove("hidden");
    computerChoice.src = `img/${compChoice}.png`;

    if (compChoice === 0) {
      mainText.textContent = "You lose! Rock wins!";
      computerScore++;
      computerPoints.textContent = computerScore;
      result();
    } else if (compChoice === 1) {
      mainText.textContent = "You win! Scissors wins!";
      playerScore++;
      playerPoints.textContent = playerScore;
      result();
    } else if (compChoice === 2) {
      mainText.textContent = "It's a draw!";
    }
  }
});

newGame.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  playerPoints.textContent = playerScore;
  computerPoints.textContent = computerScore;

  computerChoice.classList.add("hidden");
  playerChoiceScissors.style.display = "none";
  playerChoicePaper.style.display = "none";
  playerChoiceRock.style.display = "none";

  body.classList.remove("wingame");
  body.classList.remove("losegame");
  newGame.classList.remove("endgamebtn");

  mainText.textContent = "CHOOSE YOUR WEAPON...";
});

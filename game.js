const playerScore = 0;
const computerScore = 0;
playing = true;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerChoiceRock = document.querySelector(".choice--0");
const playerChoicePaper = document.querySelector(".choice--1");
const playerChoiceScissors = document.querySelector(".choice--2");

rock.addEventListener("click", function () {
  playerChoiceRock.style.display = "block";
  playerChoicePaper.style.display = "none";
  playerChoiceScissors.style.display = "none";
});

paper.addEventListener("click", function () {
  playerChoicePaper.style.display = "block";
  playerChoiceRock.style.display = "none";
  playerChoiceScissors.style.display = "none";
});

scissors.addEventListener("click", function () {
  playerChoiceScissors.style.display = "block";
  playerChoicePaper.style.display = "none";
  playerChoiceRock.style.display = "none";
});

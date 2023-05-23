const playerScore = 0;
const computerScore = 0;
playing = true;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerChoiceRock = document.querySelector(".playerchoice--0");
const playerChoicePaper = document.querySelector(".playerchoice--1");
const playerChoiceScissors = document.querySelector(".playerchoice--2");
const computerChoiceRock = document.querySelector(".computerchoice--0");
const computerChoicePaper = document.querySelector(".computerchoice--1");
const computerChoiceScissors = document.querySelector(".computerchoice--2");
const computerChoice = document.querySelector(".rightimg");

rock.addEventListener("click", function () {
  playerChoiceRock.style.display = "block";
  playerChoicePaper.style.display = "none";
  playerChoiceScissors.style.display = "none";

  const compChoice = Math.trunc(Math.random() * 3);

  computerChoice.classList.remove("hidden");
  computerChoice.src = `img/${compChoice}.png`;
});

paper.addEventListener("click", function () {
  playerChoicePaper.style.display = "block";
  playerChoiceRock.style.display = "none";
  playerChoiceScissors.style.display = "none";

  const compChoice = Math.trunc(Math.random() * 3);

  computerChoice.classList.remove("hidden");
  computerChoice.src = `img/${compChoice}.png`;
});

scissors.addEventListener("click", function () {
  playerChoiceScissors.style.display = "block";
  playerChoicePaper.style.display = "none";
  playerChoiceRock.style.display = "none";

  const compChoice = Math.trunc(Math.random() * 3);

  computerChoice.classList.remove("hidden");
  computerChoice.src = `img/${compChoice}.png`;
});

let humanScore = 0;
let computerScore = 0;
const message = {
  error: "Please play by the rules.",
  win: "You win!",
  lose: "You lose!",
  tie: "It's a tie! Try again.",
};

// Game Logic

function game(human, computer) {
  if (
    (human == "paper" && computer == "rock") ||
    (human == "rock" && computer == "scissors") ||
    (human == "scissors" && computer == "paper")
  ) {
    humanScore++;
    scoreShow.textContent = message.win;
    scoreShow.style.color = "green";
  } else if (
    (human == "rock" && computer == "paper") ||
    (human == "scissors" && computer == "rock") ||
    (human == "paper" && computer == "scissors")
  ) {
    computerScore++;
    scoreShow.textContent = message.lose;
    scoreShow.style.color = "red";
  } else if (human == computer) {
    scoreShow.textContent = message.tie;
  }

  if (humanScore == 5) {
    scoreShow.textContent = "You Win! Hit the reset button to try again.";
  } else if (computerScore == 5) {
    scoreShow.textContent = "Computer Wins! Hit the reset button to try again.";
  }

  if (humanScore == 5 || computerScore == 5) {
    humanScore = 0;
    computerScore = 0;
    removeAllChildNodes(master);
    // scoreShow.textContent = "Hit the reset button to try again.";
    const resetBtn = document.createElement("button");
    resetBtn.className = "btn btn-primary";
    resetBtn.textContent = "Reset";
    master.appendChild(resetBtn);
    resetBtn.onclick = () => {
      location.reload();
    };
  }
}

// Write a function where the computer returns either rock, paper or scissors.

function computerDecides() {
  let computerSelection = ["paper", "rock", "scissors"];
  let selection =
    computerSelection[Math.floor(Math.random() * computerSelection.length)];
  computerChoiceShow.textContent = `Computer Choice: ${selection}`;
  return selection;
}

// Write a function that adds an event listener to each button, plays the game, and updates the score.

function eventListener(choice) {
  choice.addEventListener("click", () => {
    humanChoiceShow.textContent = `Your Choice: ${choice.value}`;
    game(choice.value, computerDecides());
    scoreKeep();
  });
}

// Write a function that keeps shows the score of player and computer

function scoreKeep() {
  humanScoreResult.textContent = `Your Score: ${humanScore}`;
  computerScoreResult.textContent = `Computer score: ${computerScore}`;
}

// Write a function that selects all child nodes of an element and removes them

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Dom Manipulation

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const humanResult = document.querySelector(".humanResult");
const computerResult = document.querySelector(".computerResult");
const humanChoice = document.querySelector(".humanChoice");
const score = document.querySelector(".score");
const master = document.querySelector(".master");
const button = document.querySelector(".btn");

const humanScoreResult = document.createElement("p");
const computerScoreResult = document.createElement("p");
const humanChoiceShow = document.createElement("p");
const computerChoiceShow = document.createElement("p");
const scoreShow = document.createElement("p");

humanChoice.appendChild(humanChoiceShow),
  (humanChoiceShow.textContent = "Your Choice:");
computerResult.appendChild(computerChoiceShow),
  (computerChoiceShow.textContent = "Computer Choice:");
humanResult.appendChild(humanScoreResult),
  (humanScoreResult.textContent = "Your Score:");
computerResult.appendChild(computerScoreResult),
  (computerScoreResult.textContent = "Computer Score:");
score.appendChild(scoreShow), (scoreShow.textContent = "PLAY THE GAME!");

eventListener(rock);
eventListener(paper);
eventListener(scissors);

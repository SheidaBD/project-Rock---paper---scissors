const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoices) {
  const computerChoices = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoices === computerChoices) {
    result = " it's a tie!!!";
  } else {
    switch (playerChoices) {
      case "rock":
        result = (computerChoices === "scissors" )? "you win" : "you lose";
        break;
      case "paper":
        result = (computerChoices === "rock") ? "you win" : "you lose";
        break;
      case "scissors":
        result = (computerChoices === "paper" )? "you win" : "you lose";
        break;
    }
  }

  playerDisplay.textContent = `player : ${playerChoices}`;
  computerDisplay.textContent = `computer: ${computerChoices}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");
   
  switch (result) {
    case "you Win!":
        resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "you Lose!":
        resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;

   
  }
}

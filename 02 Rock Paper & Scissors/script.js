let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScoreText = document.querySelector("#myscore");
const botScoreText = document.querySelector("#botscore");

function gameRules(userChoice) {
  let botChoice = computerChoice();
  if (userChoice === botChoice) {
    msg.innerText = "Game was Draw Play Again";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoice == "Rock") {
      userWin = botChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = botChoice === "Scissors" ? false : true;
    } else {
      userWin = botChoice === "Rock" ? false : true;
    }
    gameWinner(userWin, userChoice, botChoice);
  }
}

function gameWinner(userWin, userChoice, botChoice) {
  if (userWin) {
    userScore++;
    userScoreText.innerText = userScore;
    msg.innerText = `You Win : Your ${userChoice} Beats Bot's ${botChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    botScore++;
    botScoreText.innerText = botScore;
    msg.innerText = `You Lose : Bot's ${botChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
  gameOver(userScore, botScore);
}

function myChoice() {
  for (const choice of choices) {
    choice.addEventListener("click", () => {
      gameRules(choice.id);
    });
  }
}
myChoice();

function computerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const ramIdx = Math.floor(Math.random() * 3);
  return options[ramIdx];
}

function gameOver(userScore, botScore) {
  if (userScore == 10 || botScore == 10) {
    msg.innerText = `Winner is ${userScore == 10 ? "User" : "Bot"}`;
    msg.style.backgroundColor = "blue";
    choices.forEach((choice) =>
      choice.setAttribute("style", "pointer-events: none")
    );
    let resetButton = document.createElement("button");
    resetButton.innerText = "New Game";
    resetButton.setAttribute("id", "reset");
    msg.parentElement.appendChild(resetButton);
    resetButton.addEventListener("click", () => resetGame(resetButton));
  }
}

function resetGame(resetButton) {
  userScore = 0;
  botScore = 0;
  userScoreText.innerText = userScore;
  botScoreText.innerText = botScore;
  choices.forEach((choice) => choice.setAttribute("style", ""));
  msg.parentElement.removeChild(resetButton);
  msg.innerText ='Play Your Move'
  msg.style.backgroundColor = "#081b31";
}
resetGame();

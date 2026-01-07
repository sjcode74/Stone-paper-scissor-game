let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ["stone", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw 🤝";
  } 
  else if (
    (userChoice === "stone" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win 🎉";
    userScore++;
  } 
  else {
    result = "You Lose 😢";
    computerScore++;
  }

  document.getElementById("message").innerHTML =
    `You chose: <b>${userChoice}</b><br>Computer chose: <b>${computerChoice}
    </b><br>
    <span style="font-size:20px;">${result}</span>`;

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").innerText = 0;
  document.getElementById("computerScore").innerText = 0;
  document.getElementById("message").innerText = "Choose your move!";
}

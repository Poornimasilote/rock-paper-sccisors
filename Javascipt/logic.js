const choices = ["stone", "paper", "scissor"];

const winRules = {
  stone: "scissor",
  paper: "stone",
  scissor: "paper"
};

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const decideWinner = (user, pc) => {
  if (user === pc) return "tie";
  return winRules[user] === pc ? "win" : "lose";
};

const playRound = (userChoice) => {
  gameState.userChoice = userChoice;
  gameState.pcChoice = getComputerChoice();

  const result = decideWinner(userChoice, gameState.pcChoice);
  gameState.result = result;

  if (result === "win") gameState.userScore++;
  if (result === "lose") gameState.pcScore++;

  saveScores();
  return { ...gameState };
};

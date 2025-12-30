const STORAGE_KEYS = {
  USER_SCORE: "rps_user_score",
  PC_SCORE: "rps_pc_score"
};

const gameState = {
  userScore: 0,
  pcScore: 0,
  userChoice: null,
  pcChoice: null,
  result: null
};

const loadScores = () => {
  gameState.userScore = Number(localStorage.getItem(STORAGE_KEYS.USER_SCORE)) || 0;
  gameState.pcScore = Number(localStorage.getItem(STORAGE_KEYS.PC_SCORE)) || 0;
};

const saveScores = () => {
  localStorage.setItem(STORAGE_KEYS.USER_SCORE, gameState.userScore);
  localStorage.setItem(STORAGE_KEYS.PC_SCORE, gameState.pcScore);
};

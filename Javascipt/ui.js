/* ************* DOM REFERENCES*/

// Scoreboard
const scoreBoard = document.getElementById("score-board");
const userScoreEl = document.getElementById("user-score");
const pcScoreEl = document.getElementById("pc-score");

// Sections
const gameSection = document.getElementById("game");
const resultSection = document.getElementById("result");
const hurraySection = document.getElementById("hurray");

// Result content
const resultTextEl = document.getElementById("result-text");
const nextBtn = document.getElementById("next");

// Picked choices (Result screen)
const userPickedEl = document.getElementById("user-picked");
const pcPickedEl = document.getElementById("pc-picked");

/****************** SCORE RENDERING */

const renderScores = () => {
  userScoreEl.textContent = gameState.userScore;
  pcScoreEl.textContent = gameState.pcScore;
};

/*********************** RESULT SCREEN */

const showPickedChoices = () => {
  // reset previous classes
  userPickedEl.className = "choice-circle";
  pcPickedEl.className = "choice-circle";

  // apply choice visuals
  userPickedEl.classList.add(gameState.userChoice);
  pcPickedEl.classList.add(gameState.pcChoice);

  // apply 5-ring glow to winner only
  if (gameState.result === "win") {
    userPickedEl.classList.add("winner");
  } else if (gameState.result === "lose") {
    pcPickedEl.classList.add("winner");
  }
};

const showResult = (result) => {
  gameSection.style.display = "none";
  resultSection.style.display = "block";

  // scoreboard stays visible here
  scoreBoard.style.display = "flex";

  if (result === "win") {
    resultTextEl.textContent = "YOU WIN";
    nextBtn.style.display = "inline-block";
  } else if (result === "lose") {
    resultTextEl.textContent = "YOU LOST";
    nextBtn.style.display = "none";
  } else {
    resultTextEl.textContent = "TIE UP";
    nextBtn.style.display = "none";
  }

  showPickedChoices();
};


//   RESET / PLAY AGAIN
function resetGame() {

  userPickedEl.classList.remove("winner");
  pcPickedEl.classList.remove("winner");

  /* force browser reflow so animation restarts next time */
  void userPickedEl.offsetWidth;
  void pcPickedEl.offsetWidth;

 
 //    RESET SCREENS
  document.getElementById("result").style.display = "none";
  document.getElementById("hurray").style.display = "none";
  document.getElementById("game").style.display = "block";

    
  //   RESTORE SCOREBOARD 
  scoreBoard.style.display = "flex"; 

 
//     RESET RESULT UI
  document.getElementById("next").style.display = "none";
}



   //HURRAY SCREEN


const showHurray = () => {
  resultSection.style.display = "none";
  hurraySection.style.display = "block";

  // hide scoreboard on hurray
  scoreBoard.style.display = "none";
};

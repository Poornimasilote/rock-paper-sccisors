/*INITIALIZE APP*/

loadScores();
renderScores();

/* GAME CHOICE HANDLERS */

document.querySelectorAll("[data-choice]").forEach((btn) => {
  btn.addEventListener("click", () => {

    // Play one round
    const state = playRound(btn.dataset.choice);

    // Update UI
    renderScores();
    showResult(state.result);
  });
});

/* PLAY AGAIN (FROM RESULT) */

document
  .getElementById("play-again")
  .addEventListener("click", resetGame);

/* NEXT → HURRAY SCREEN*/

document
  .getElementById("next")
  .addEventListener("click", showHurray);

/*PLAY AGAIN (FROM HURRAY)  */

document
  .getElementById("hurray-play-again")
  .addEventListener("click", resetGame);

/*  RULES MODAL */

const rulesBtn = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const closeRulesBtn = document.getElementById("close-rules");

rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "block";
});

closeRulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "none";
});

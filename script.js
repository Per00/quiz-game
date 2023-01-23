const btnStart = document.getElementById("btn-start");
const header = document.getElementById("header");
const boardQuiz = document.getElementById("Board-quiz");

btnStart.addEventListener("click", () => {
  header.classList.add("hidden");

  const game = new Game();

  game.genBoard(boardQuiz);
});

const btnStart = document.getElementById("btn-start");
const header = document.getElementById("header");
const board = document.getElementById("board-Quiz");

btnStart.addEventListener("click", () => {
  header.classList.add("hidden");

  //btn1.addEventListener("click", () => {
  //div.classList.add("hidden");
  //})

  const game = new Game();

  game.genBoard(board);
});

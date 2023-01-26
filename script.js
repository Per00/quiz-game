const btnStart = document.getElementById("btn-start");
const header = document.getElementById("header");
const board = document.getElementById("board-Quiz");
// puxando as tags do html para o JavaScript

btnStart.addEventListener("click", () => {
  header.classList.add("hidden");
  //criando um evento de click para a tela inicial, levando á próxima tela.

  const game = new Game(); // gerando um novo jogo

  game.genBoard(board);
});

class Game {
  constructor() {
    this.questions = 5;
  }

  genBoard(boardQuiz) {
    for (let i = 0; i < this.questions; i++) {
      const notes = document.createElement("div");
      notes.classList.add("notes");

      boardQuiz.appendChild(notes);
      // criando 5 divs, as perguntas
    }
  }
}

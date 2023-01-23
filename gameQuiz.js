class Game {
  constructor() {
    this.questions = 5;
    this.question1 = 1;
    this.question2 = 2;
    this.question3 = 3;
    this.question4 = 4;
    this.question5 = 5;
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

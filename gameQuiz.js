class Game {
  constructor() {
    this.perguntas = [
      {
        Pergunta: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",
        B: "Peugeot",
        C: "Volvo",
        D: "VolksWagen",
      },

      {
        Pergunta: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",
        B: "Peugeot",
        C: "Volvo",
        D: "VolksWagen",
      },

      {
        Pergunta: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",
        B: "Peugeot",
        C: "Volvo",
        D: "VolksWagen",
      },
    ];
    //for (let i = 0; i < this.perguntas.length; i++) {
    //console.log(this.perguntas[i].Pergunta);
    //}
  }
  genBoard(boardQuiz) {
    for (let i = 0; i < this.perguntas; i++) {
      const notes = document.createElement("div");
      notes.classList.add("notes");

      boardQuiz.appendChild(notes);
      // criando 5 divs, as perguntas
    }
  }
}

class Game {
  constructor() {
    this.perguntas = [
      {
        Pergunta: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",
        correct: false,
        B: "Peugeot",
        correct: false,
        C: "Volvo",
        correct: true,
        D: "VolksWagen",
        correct: false,
      },

      {
        Pergunta:
          "Qual a marca de automoveis que criou o dispositivo de segurança (cinto de 3 pontos), e liberou a patente para as outras marcas ?",
        A: "GeneralMotors",
        correct: false,
        B: "Citröen",
        correct: false,
        C: "VolksWagen",
        correct: false,
        D: "Volvo",
        correct: true,
      },

      {
        Pergunta: "Quem desenvolveu o primeiro automóvel ?",
        A: "Pedro Henrique",
        correct: false,
        B: "Enzo Ferrari",
        correct: false,
        C: "Ferruccio Lamborghini",
        correct: false,
        D: "Karl Benz",
        correct: true,
      },

      {
        Pergunta: "Qual é a marca de carros que mais vende no mundo? ",
        A: "Toyota",
        correct: true,
        B: "Honda",
        correct: false,
        C: "VolksWagen",
        correct: false,
        D: "Subaru",
        correct: false,
      },

      {
        Pergunta: "Qual o carro mais caro já vendido no mundo (até 2022) ?",
        A: "Ferrari LaFerrari",
        correct: false,
        B: "Bugatti La Voiture Noire",
        correct: true,
        C: "Mercedes-AMG One",
        correct: false,
        D: "Rolls-Royce Sweptail",
        correct: false,
      },
    ];

    //console.log(this.perguntas[i].Pergunta);
    //}
  }
  genBoard(board) {
    for (let i = 0; i < this.perguntas.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      board.appendChild(card);
    }
  }

  //questions() {
  // for (let i = 0; i < this.perguntas.length; i++) {
  //}
}

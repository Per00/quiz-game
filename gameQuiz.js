class Game {
  constructor() {
    this.perguntas = [
      {
        Pergunta: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",
        B: "Peugeot",
        C: "Volvo", // true
        D: "VolksWagen",
      },

      {
        Pergunta:
          "Qual a marca de automoveis que criou o dispositivo de segurança (cinto de 3 pontos), e liberou a patente para as outras marcas ?",
        A: "GeneralMotors",
        B: "Citröen",
        C: "VolksWagen",
        D: "Volvo", // true
      },

      {
        Pergunta: "Quem desenvolveu o primeiro automóvel ?",
        A: "Pedro Henrique",
        B: "Enzo Ferrari",
        C: "Ferruccio Lamborghini",
        D: "Karl Benz", // true
      },

      {
        Pergunta: "Qual é a marca de carros que mais vende no mundo? ",
        A: "Toyota", // true
        B: "Honda",
        C: "VolksWagen",
        D: "Subaru",
      },

      {
        Pergunta: "Qual o carro mais caro já vendido no mundo (até 2022) ?",
        A: "Ferrari LaFerrari",
        B: "Bugatti La Voiture Noire", // true
        C: "Mercedes-AMG One",
        D: "Rolls-Royce Sweptail",
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

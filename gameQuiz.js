class Game {
  constructor() {
    this.perguntas = [
      {
        Pergunta: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",

        B: "Peugeot",

        C: "Volvo",

        D: "VolksWagen",
        correct: "Volvo",
      },

      {
        Pergunta:
          "Qual a marca de automoveis que criou o dispositivo de segurança (cinto de 3 pontos), e liberou a patente para as outras marcas ?",
        A: "GeneralMotors",

        B: "Citröen",

        C: "VolksWagen",

        D: "Volvo",
        correct: "Volvo",
      },

      {
        Pergunta: "Quem desenvolveu o primeiro automóvel ?",
        A: "Pedro Henrique",

        B: "Enzo Ferrari",

        C: "Ferruccio Lamborghini",

        D: "Karl Benz",
        correct: "Karl Benz",
      },

      {
        Pergunta: "Qual é a marca de carros que mais vende no mundo? ",
        A: "Toyota",

        B: "Honda",

        C: "VolksWagen",

        D: "Subaru",
        correct: "Toyota",
      },

      {
        Pergunta: "Qual o carro mais caro já vendido no mundo (até 2022) ?",
        A: "Ferrari LaFerrari",

        B: "Bugatti La Voiture Noire",

        C: "Mercedes-AMG One",

        D: "Rolls-Royce Sweptail",

        correct: "Bugatti La Voiture Noire",
      },
    ];
    this.round = 0;
    this.Pergunta = this.perguntas[this.round];

    //console.log(this.perguntas[i].Pergunta);
    //}
  }
  genBoard(board) {
    const card = document.createElement("div");
    card.classList.add("card");
    let h1 = document.createElement("h1");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let btn4 = document.createElement("button");

    h1.innerText = this.perguntas.Pergunta;
    btn1.innerText = this.Pergunta.A;
    btn2.innerText = this.Pergunta.B;
    btn3.innertext = this.Pergunta.C;
    btn4.innerText = this.Pergunta.D;

    card.appendChild(h1);
    card.appendChild(btn1);
    card.appendChild(btn2);
    card.appendChild(btn3);
    card.appendChild(btn4);

    board.appendChild(card);
  }
}

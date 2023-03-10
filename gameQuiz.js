class Game {
  constructor() {
    this.perguntas = [
      {
        question: "Qual a marca de automoveis mais segura do mundo ?",
        A: "Ford",

        B: "Peugeot",

        C: "Volvo",

        D: "VolksWagen",
        correct: "Volvo",
      },

      {
        question:
          "Qual a marca de automoveis que criou o dispositivo de segurança (cinto de 3 pontos), e liberou a patente para as outras marcas ?",
        A: "GeneralMotors",

        B: "Citröen",

        C: "VolksWagen",

        D: "Volvo",
        correct: "Volvo",
      },

      {
        question: "Quem desenvolveu o primeiro automóvel ?",
        A: "Pedro Henrique",

        B: "Enzo Ferrari",

        C: "Ferruccio Lamborghini",

        D: "Karl Benz",
        correct: "Karl Benz",
      },

      {
        question: "Qual é a marca de carros que mais vende no mundo? ",
        A: "Toyota",

        B: "Honda",

        C: "VolksWagen",

        D: "Subaru",
        correct: "Toyota",
      },

      {
        question: "Qual o carro mais caro já vendido no mundo (até 2022) ?",
        A: "Ferrari LaFerrari",

        B: "Bugatti La Voiture Noire",

        C: "Mercedes-AMG One",

        D: "Rolls-Royce Sweptail",

        correct: "Bugatti La Voiture Noire",
      },
    ];
    this.round = 0;
    this.question = this.perguntas[this.round];
    this.board = null;
    //criando as perguntas, as respotas e as respostas corretas

    //console.log(this.perguntas[i].Pergunta);
  }
  genBoard(board) {
    this.board = board;
    const card = document.createElement("div");
    card.classList.add("card");
    //criando uma div e uma classe para ela

    let h1 = document.createElement("h1");
    let btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    let btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    let btn3 = document.createElement("button");
    btn3.classList.add("btn3");
    let btn4 = document.createElement("button");
    btn4.classList.add("btn4");
    //criando elementos e classes, para a div criada anteriormente

    let allButtons = [btn1, btn2, btn3, btn4];
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener("click", (e) => {
        this.check(e);
      });
    }
    //allButtons está capturando todos os btns e adicionando um evento de click neles

    h1.innerText = this.question.question;
    btn1.innerText = this.question.A;
    btn2.innerText = this.question.B;
    btn3.innerText = this.question.C;
    btn4.innerText = this.question.D;
    //colocando as perguntas e as respostas dentro dos elementos

    card.appendChild(h1);
    card.appendChild(btn1);
    card.appendChild(btn2);
    card.appendChild(btn3);
    card.appendChild(btn4);
    //atribuindo ao card

    board.appendChild(card);
    //atribuindo ao board
  }
  check(event) {
    let buttonClicked = event.target; //click do botão, colocando o evento e onde o botão está localizado
    // buttonClicked.classList.add("clicked");
    console.log(buttonClicked.innerText); // opção que foi clicada
    console.log(this.question.correct);

    if (buttonClicked.innerText === this.question.correct) {
      console.log("a pergunta clicada está igual a pergunta correct");
      this.nextQuestion();
    } else {
      console.log("resposta errada");
    }
  }

  nextQuestion() {
    this.round++; // está mudando de 0 para 1
    if (this.round === this.perguntas.length) {
      //esta indo até a ultima pergunta e parando de gerar
      this.endGame();
      return;
    }
    this.question = this.perguntas[this.round]; // está mudando a pergunta
    this.board.innerText = ""; // está apagando a pergunta anterior
    this.genBoard(this.board); // está gerando meu board novamene, com uma nova pergunta
  }

  endGame() {
    let imgFinal = document.createElement("img");
    imgFinal.setAttribute("src", "./imagens/carroFinal.jpg");
    imgFinal.classList.add("finalImg");
    this.board.innerText = "";
    this.board.appendChild(imgFinal);
    // criando uma tag de img e colocando um atributo src. para a imagem final que será mostrada quando as perguntas acabarem
  }
}

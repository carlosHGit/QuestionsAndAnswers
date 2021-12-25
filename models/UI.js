export class UI {
  //el constructor no recibe parametros, da igual si está o no porwque se inicializa automaticamente
  constructor(){}

  //se reciben los datos de los objetos de tipo Question y se toman uno a uno y se van pintando en el DOM por medio
  // del id
  showQuestion(actualScore, pregunta, categoria, difficulty) {
    let maxScore = difficulty * 1000;
    let score = actualScore;
    //titulo
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = pregunta;
    //categoria
    const questionCategory = document.getElementById("categoria");
    questionCategory.innerHTML = categoria;
    //
    const questiondifficulty = document.getElementById("round");
    questiondifficulty.innerHTML = `Ronda: ${difficulty}`;
    //
    const scoreRound = document.getElementById("score-round");
    scoreRound.innerHTML = `Puntos de la ronda: ${maxScore}`;
    //
    const acumScore = document.getElementById("actual-score");
    acumScore.innerHTML = `Puntaje Actual: ${score}`;

  }

  // como parametro se pasa una funcion de call back para iterar los elementos de las opciones y construir uno en el DOM por cada iteracion
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }
  //estado final del juego, muestra el score y reemplaza los demas elemtos del dom
  showScores(score) {
    const gameOverHTML = `
    <h1>Result</h1>
    <h2 id="score">Your scores: ${score}</h2>
    `;


    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    //grabar los datos, se almacenan en el local store, con llave nombre temp de jugador
    this.saveMatch(score);
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }

  saveMatch(score) {
    // se genera un numero aleatorio de jugador
    let UID = "jugador-" + Math.floor(Math.random() * 999999);
    let objMatch = {score };

    //castear obj a texto y almacenar en el local storage
    localStorage.setItem(UID, JSON.stringify(objMatch))

  }
}
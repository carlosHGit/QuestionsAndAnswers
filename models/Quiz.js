export class Quiz {
  //clase cuestionario, tiene los metodos que se aplican a partir de recibir un array de objetos de tipo Question
  score = 0;
  questionIndex = 0;


  constructor(questions) {
    this.questions = questions;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  //finaliza si se llega a la pregunra 25
  isEnded() {
    return this.questions.length === this.questionIndex;
  }
  //se calculan los puntos para cada respuesta: dificultad (que viene definida en el banco) * 1000 divido la cantidad de preguntas de la ronda
  guess(answer, dificultad) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score += dificultad * 1000 / 5;
    }
    this.questionIndex++;
  }
  // en caso de no adivinar, se retorna cero y en el app.js se manda a llamar el final del juego con resultado = 0
  noGuess(answer) {
    if (!this.getQuestionIndex().correctAnswer(answer)) {
      return 0;
    }
  }

}
//@ts-check
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questions } from "./data/questions.js";

// se renderiza la pagina con dos instancias, una de clase quiz con la logica de las preguntas y otra con Ui para mostrar los datos en el index
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(
      quiz.score,
      quiz.getQuestionIndex().pregunta,
      quiz.getQuestionIndex().categoria,
      quiz.getQuestionIndex().dificultad,
    );
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
      if (quiz.noGuess(currenChoice) === 0) {
        ui.showScores(quiz.score = 0);
        // location.reload();
      }
      quiz.guess(currenChoice, quiz.getQuestionIndex().dificultad);
      renderPage(quiz, ui);
    });
  }
  
  document.getElementById("exit").onclick = function () {
    ui.showScores(quiz.score);
  };


};




function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
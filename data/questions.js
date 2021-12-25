import { Question } from "../models/Question.js";

//traer el banco del json con xmlhttp
let txt_questions = readText("./data/questions_bank.json");
let json_questions = JSON.parse(txt_questions);

export const questions = json_questions.map(element => new Question(
  element.categoria,
  element.dificultad,
  element.pregunta,
  element.respuesta,
  element.incorrecta1,
  element.incorrecta2,
  element.incorrecta3,
  element.imagen,
  element.alt,
  element.objectFit,
))

//ordenar de forma aleatoria las preguntas
questions.sort(function () { return Math.random() - 0.5 });

//ordenarlas por difucultad
questions.sort(function (a, b) {
  return a.dificultad - b.dificultad
})

//funcion para traer datos del json, como no es local sino con live server toca traerlos como si fueran el reultado de una api
function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
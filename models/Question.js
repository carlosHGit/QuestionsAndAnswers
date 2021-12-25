class Question {
  //clase de la pregunta, se traen los elementos json para convertirlos en objetos del tipo pregunta 
  constructor(categoria, dificultad, pregunta, respuesta, incorrecta1, incorrecta2, incorrecta3) {

    this.categoria = categoria;
    this.dificultad = dificultad;
    this.choices = [respuesta, incorrecta1, incorrecta2, incorrecta3];
    //desordenar el array de opciones de forma aleatoria
    this.choices.sort(function () { return Math.random() - 0.5 });
    this.pregunta = pregunta;
    this.respuesta = respuesta;
  }

  correctAnswer(choice) {
    return choice === this.respuesta;
  }

  dificultad() {
    return this.dificultad
  }
}

export { Question };
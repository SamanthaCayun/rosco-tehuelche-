const preguntas = [
  { letra: "A", palabra: "Aonikenk", pista: "Nombre con que los tehuelches se autodenominaban; significa gente del sur." },
  { letra: "B", palabra: "Blanco", pista: "Color del caballo usado en ceremonias." },
  { letra: "C", palabra: "Cielo", pista: "Representado en el color azul, símbolo de libertad y amplitud." },
  { letra: "D", palabra: "Desierto", pista: "Nombre con el que se intentó borrar su existencia, aunque ellos nunca fueron desierto sino comunidad viva." },
  { letra: "E", palabra: "Estepa", pista: "Paisaje típico donde habitan, con vientos fuertes y horizontes amplios." },
  { letra: "F", palabra: "Flecha", pista: "Símbolo central de su bandera que representa la lucha, defensa y resistencia del pueblo tehuelche." },
  { letra: "G", palabra: "Guanaco", pista: "Animal fundamental en su vida: alimento, abrigo y símbolo de respeto por la naturaleza." },
  { letra: "H", palabra: "Huellas", pista: "Rastros que dejaron en la tierra, en las rocas y en las costumbres que aún perduran." },
  { letra: "I", palabra: "Identidad", pista: "Lo que mantiene vivo al pueblo tehuelche, su cultura y su historia." },
  { letra: "J", palabra: "Justicia", pista: "Reclamo permanente por sus derechos y reconocimiento." },
  { letra: "L", palabra: "Tehuelche", pista: "Lleva L, Pueblo originario del sur de la Patagonia." },
  { letra: "M", palabra: "Montaña", pista: "Parte importante del paisaje que habitan y donde realizaban sus recorridos de caza." },
  { letra: "N", palabra: "Ñandú", pista: "Ave autóctona de la Patagonia, también fuente de alimento." },
  { letra: "O", palabra: "Oveja", pista: "Animal introducido por los colonos; muchos tehuelches trabajaron como pastores en estancias." },
  { letra: "P", palabra: "Puelche", pista: "Nombre con el que se conocía a los tehuelches del este o 'gente del este'." },
  { letra: "Q", palabra: "Querencia", pista: "Lugar donde se siente el apego a la tierra y la pertenencia." },
  { letra: "R", palabra: "Resistencia", pista: "Representada por la flecha en su bandera, símbolo de fuerza y dignidad." },
  { letra: "S", palabra: "Sol", pista: "Representado en el color amarillo de su bandera, símbolo de energía y vida." },
  { letra: "T", palabra: "Toldo", pista: "Vivienda tradicional hecha de cuero de guanaco." },
  { letra: "U", palabra: "Unidad", pista: "La unión entre familias y comunidades para sobrevivir en la estepa." },
  { letra: "V", palabra: "Viento", pista: "Elemento natural constante en la vida tehuelche, símbolo de libertad y fortaleza." },
  { letra: "Z", palabra: "Azul", pista: "Lleva Z color que simboliza el cielo." }
];

const rosco = document.getElementById("rosco");
const pistaDiv = document.getElementById("pista");
const respuestaInput = document.getElementById("respuesta");
const checkBtn = document.getElementById("checkBtn");
const pasapalabraBtn = document.getElementById("pasapalabraBtn");
const resultadoDiv = document.getElementById("resultado");

let indexActual = 0;

// Dibujar rosco circular
function dibujarRosco() {
  const radio = 200;
  const centroX = 250;
  const centroY = 250;
  const total = preguntas.length;

  preguntas.forEach((pregunta, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
    const x = centroX + radio * Math.cos(angle) - 25;
    const y = centroY + radio * Math.sin(angle) - 25;
    const div = document.createElement("div");
    div.classList.add("letter");
    div.textContent = pregunta.letra;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    rosco.appendChild(div);
    pregunta.div = div;
  });
}

dibujarRosco();
mostrarPista();

function mostrarPista() {
  pistaDiv.textContent = preguntas[indexActual].pista;
}

function siguiente() {
  indexActual++;
  if (indexActual >= preguntas.length) indexActual = 0;
  mostrarPista();
  respuestaInput.value = "";
  resultadoDiv.textContent = "";
}

function comprobar() {
  const respuesta = respuestaInput.value.trim().toLowerCase();
  const palabraCorrecta = preguntas[indexActual].palabra.toLowerCase();

  if (respuesta === palabraCorrecta) {
    preguntas[indexActual].div.style.backgroundColor = "green";
    resultadoDiv.textContent = "¡Correcto!";
  } else if (respuesta === "pasapalabra" || respuesta === "") {
    resultadoDiv.textContent = "Pasapalabra";
  } else {
    preguntas[indexActual].div.style.backgroundColor = "red";
    resultadoDiv.textContent = "Incorrecto. La respuesta correcta era: " + preguntas[indexActual].palabra;
  }

  siguiente();
}

checkBtn.addEventListener("click", comprobar);
pasapalabraBtn.addEventListener("click", siguiente);

//Fase 1://
let nombreMascota = prompt("¿Cómo se llama tu mascota virtual?");
let nivelHambre = 50;
let nivelFelicidad = 50;

function mostrarEstado() {
  console.log(`Mascota: ${nombreMascota}, Hambre: ${nivelHambre}/100, Felicidad: ${nivelFelicidad}/100.`);
}

//Fase 2: //
const alimentar = function(puntosComida) {
  nivelHambre -= puntosComida;

  if (nivelHambre < 0) {
    nivelHambre = 0;
  }

  console.log(`¡Ñam! El hambre de ${nombreMascota} ha disminuido. Hambre: ${nivelHambre}/100.`);
};

const jugar = (puntosDiversion) => {
  nivelFelicidad += puntosDiversion;

  if (nivelFelicidad > 100) {
    nivelFelicidad = 100;
  }

  console.log(`¡Qué divertido!, La felicidad de ${nombreMascota} ha aumentado. Felicidad: ${nivelFelicidad}/100.`);
}; 

mostrarEstado();


// Fase 3: //
const simularPasoDelTiempo = () => {
  for (let i = 0; i < 4; i++) {
    nivelHambre += 0;
    nivelFelicidad += 0;

    if (nivelHambre > 100) nivelHambre = 100;
    if (nivelFelicidad < 0) nivelFelicidad = 0;
  }

  console.log(" Han pasado algunas horas...");
  mostrarEstado();
};

function diagnosticoMascota() {
  console.log("han pasado muchas horas");


  if (nivelHambre < 30) {
    console.log("Tu mascota está satisfecha.");
  } else if (nivelHambre < 50) {
    console.log("Tu mascota tiene algo de hambre.");
  } else {
    console.log("¡Alerta!, Tu mascota está muy hambrienta.");
  }

  let nivel = Math.floor(nivelFelicidad / 20);

  switch (nivel) {
    case 5:
    case 4:
      console.log("Tu mascota está muy feliz y juguetona.");
      break;
    case 3:
    case 2:
      console.log("Tu mascota está contenta.");
      break;
    case 1:
    case 0:
      console.log("Tu mascota se siente un poco triste.");
      break;
    default:
      console.log("Estado emocional desconocido.");
      break;
  }
}

simularPasoDelTiempo();
diagnosticoMascota();

// Fusion 4: //

function iniciarCuidado() {
  while (true) {
    let opcion = prompt(
      `Menú de Cuidado de Mascota:\n` +
      `1 - Alimentar a la mascota\n` +
      `2 - Jugar con la mascota\n` +
      `3 - Simular el paso del tiempo\n` +
      `4 - Ver diagnóstico de la mascota\n` +
      `5 - Mostrar estado actual\n` +
      `6 - Despedirse de la mascota`
    );

    switch (opcion) {
      case '1':
        let comida = parseInt(prompt("¿Cuántos puntos de comida quieres darle?"));
        if (!isNaN(comida)) {
          alimentar(comida);
        } else {
          console.log("Entrada no válida.");
        }
        break;

      case '2':
        let diversion = parseInt(prompt("¿Cuántos puntos de diversión quieres darle?"));
        if (!isNaN(diversion)) {
          jugar(diversion);
        } else {
          console.log("Entrada no válida.");
        }
        break;

      case '3':
        simularPasoDelTiempo();
        break;

      case '4':
        diagnosticoMascota();
        break;

      case '5':
        mostrarEstado();
        break;

      case '6':
        console.log(`¡Adiós! ${nombreMascota} te extrañará.`);
        return;

      default:
        console.log(" Opción no válida. Intenta de nuevo.");
        break;
    }
  }
}

iniciarCuidado();

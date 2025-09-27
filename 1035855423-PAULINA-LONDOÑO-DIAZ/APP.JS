// Paso 1: Capturar el nombre de la mascota
let nombreMascota = prompt("¿Cómo se llama tu mascota virtual?");

// Paso 2: Declarar variables de estado
let nivelHambre = 50;     // Escala de 0 a 100
let nivelFelicidad = 50;  // Escala de 0 a 100

// Paso 3: Función declarativa para mostrar el estado actual
function mostrarEstado() {
  console.log(`Mascota: ${nombreMascota}, Hambre: ${nivelHambre}/100, Felicidad: ${nivelFelicidad}/100.`);
}

// Llamar la función una vez para ver el estado inicial
mostrarEstado();

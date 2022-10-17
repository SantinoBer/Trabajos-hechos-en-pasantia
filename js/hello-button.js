// Escuchar click del boton
const boton = document.getElementById("boton");
boton.addEventListener("click", preguntarNombre);

// Guardamos referencia a los heading
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

// Preguntar y guardar el nombre del usuario
function preguntarNombre() {
  const nombre = prompt("introduce tu nombre");
  mostrarNombre(nombre);
}

// Insertar nombre donde ahora estan los ...
function mostrarNombre(nombre) {
  h2.textContent = "Hola";
  h1.textContent = nombre;
}


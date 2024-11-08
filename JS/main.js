
// variables
const pantalla = document.querySelector(".resultado");
const botones = document.querySelectorAll(".botones");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.value;

    if (boton.id === "clear") {
      pantalla.value = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (pantalla.value.length === 1 || pantalla.value === "¡Error!") {
        pantalla.value = "0";
      } else {
        pantalla.value = pantalla.value.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.value = eval(pantalla.value);
      } catch (error) {
        pantalla.value = "¡Error!";
      }
      return;
    }

    // Evitar doble punto ".."
    if (botonApretado === ".") {
      // Obtener el último número ingresado (después de cualquier operador)
      const ultimaEntrada = pantalla.value.split(/[\+\-\*\/]/).pop();

      // Si ya hay un punto en el último número, no añadir otro
      if (ultimaEntrada.includes(".")) {
        return;
      }
    }

    if (pantalla.value === "0" || pantalla.value === "¡Error!") {
      pantalla.value = botonApretado;
    } else {
      pantalla.value += botonApretado;
    }
  });
});

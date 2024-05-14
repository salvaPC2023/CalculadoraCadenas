import Calculadora_de_Cadena from "./CalculadoraCadenas";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena_de_Numeros = cadena.value;

  div.innerHTML = "<p> Suma de numeros de la cadena: " + Calculadora_de_Cadena(cadena_de_Numeros) + "</p>";
});

import calculadoraDeCadena from "./CalculadoraCadenas";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena_de_Numeros = cadena.value;

  div.innerHTML = "<p> Suma de numeros de la cadena: " + calculadoraDeCadena(cadena_de_Numeros) + "</p>";
});

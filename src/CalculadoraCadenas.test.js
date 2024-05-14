import Calculadora_de_Cadena from "./CalculadoraCadenas.js";

describe("Calcular cadena", () => {
  it("Debe de devolver 0 con una cadena vacia de entrada", () => {
    expect(Calculadora_de_Cadena("")).toEqual(0);
  });
});
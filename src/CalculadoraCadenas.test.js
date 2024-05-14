import Calculadora_de_Cadena from "./CalculadoraCadenas.js";

describe("Calcular cadena", () => {
  it("Debe de devolver 0 con una cadena vacia de entrada", () => {
    expect(Calculadora_de_Cadena("")).toEqual(0);
  });

  it("Debe de devolver 4 para una cadena con 4", () => {
    expect(Calculadora_de_Cadena("4")).toEqual(4);
  });

  it("Debe de devolver 8 para cadena con 4,4", () => {
    expect(Calculadora_de_Cadena("4,4")).toEqual(8);
  });

  it("Debe de devolver 10 para cadena con varios numeros", () => {
    expect(Calculadora_de_Cadena("4,3,2,1")).toEqual(10);
  });

  it("Debe de devolver 9 para cadena con separada con , y -", () => {
    expect(Calculadora_de_Cadena("1,2-3")).toEqual(6);
  });

});
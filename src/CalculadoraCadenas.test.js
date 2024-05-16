import calculadoraDeCadena from "./CalculadoraCadenas.js";

describe("Calcular cadena", () => {
  it("Debe de devolver 0 con una cadena vacia de entrada", () => {
    expect(calculadoraDeCadena("")).toEqual(0);
  });

  it("Debe de devolver 4 para una cadena con 4", () => {
    expect(calculadoraDeCadena("4")).toEqual(4);
  });

  it("Debe de devolver 8 para cadena con 4,4", () => {
    expect(calculadoraDeCadena("4,4")).toEqual(8);
  });

  it("Debe de devolver 10 para cadena con varios numeros", () => {
    expect(calculadoraDeCadena("4,3,2,1")).toEqual(10);
  });

  it("Debe de devolver 6 para cadena con separada con , y -", () => {
    expect(calculadoraDeCadena("1,2-3")).toEqual(6);
  });

  it("Debe de devolver 12 para cadena con separada con , y -", () => {
    expect(calculadoraDeCadena("4,3-2,1-2")).toEqual(12);
  });

  it("Debe de devolver 24 para cadena mas larga con delimitador especificado", () => {
    expect(calculadoraDeCadena("//[;] 8;12;4")).toEqual(24);
  });

  it("Debe de devolver 1 para cadena con numeros mayores o igual que 1000", () => {
    expect(calculadoraDeCadena("//[;] 1,1002;1001-1000")).toEqual(1);
  });

  it("Debe de devolver 1 para cadena con numeros >= 1000 y con delimitador personalizado con cualquier longitud", () => {
    expect(calculadoraDeCadena("//[***] 1***1002***1001***1000")).toEqual(1);
  });

});
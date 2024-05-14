function Calculadora_de_Cadena(cadena) {
    let resultado;
    let numero = parseInt(cadena);
    if(cadena == "")
    {
        resultado = 0;
    }
    else
    {
        resultado = numero;
    }
    return resultado;
  }

  export default Calculadora_de_Cadena;
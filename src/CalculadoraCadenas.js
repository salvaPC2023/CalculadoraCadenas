function Calculadora_de_Cadena(cadena) {
    let resultado = 0;
    if(cadena == "")
    {
        resultado = 0;
    }
    else
    {
        let numeros = cadena.split(',');
        for (let i = 0; i < numeros.length; i++) {
            resultado = resultado + parseInt(numeros[i]);
            console.log(numeros[i])
        }
    }
    return resultado;
  }

  export default Calculadora_de_Cadena;
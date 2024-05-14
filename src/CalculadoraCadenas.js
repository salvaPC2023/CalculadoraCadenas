function Calculadora_de_Cadena(cadena) {
    if(cadena === ""){
        return 0;
    }

    let resultado = 0;
    const numeros = cadena.split(',');

    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + parseInt(numeros[i]);
        console.log(numeros[i])
    }
    
    return resultado;
}

  export default Calculadora_de_Cadena;
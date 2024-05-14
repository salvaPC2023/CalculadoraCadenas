function Calculadora_de_Cadena(cadena) {
    if (cadena === "") 
    {
        return 0;
    }

    return cadena.split(',').reduce((resultado, segmento) => {
        if (segmento.includes('-')) {
            console.log(segmento);
            let numero2tipo = segmento.split('-');
            for (const numeroStr of numero2tipo) {
                const numero = parseInt(numeroStr);
                resultado += numero;
            }
        } else {
            resultado += Number(segmento);
        }
        return resultado;
    }, 0);
}

export default Calculadora_de_Cadena;
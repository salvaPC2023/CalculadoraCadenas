function Calculadora_de_Cadena(cadena) {
    if (cadena === "") {
        return 0;
    }
    let delimitador = ',';
    let cadena_aux = cadena;
    if (cadena.startsWith("//"))
    {
        delimitador = cadena[3];
        let Numero_cadena = (cadena.split(" "))[1];
        cadena_aux = Numero_cadena;
    }

    return cadena_aux.split(delimitador).reduce((resultado, segmento) => {
        if (segmento.includes('-')) {
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
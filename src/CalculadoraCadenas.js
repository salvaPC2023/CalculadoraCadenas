function Calculadora_de_Cadena(cadena) {
    if (cadena === "") {
        return 0;
    }
    let delimitador_Personalizado=',';
    let cadena_aux = cadena;
    if (cadena.startsWith("//"))
    {
        delimitador_Personalizado='';
        let contador = 3;

        while (contador < cadena.length) {
          if(cadena[contador] == ']')
            {
                contador = cadena.length;
            }
            else{
                delimitador_Personalizado=delimitador_Personalizado+cadena[contador];
                contador++;
            }
        }
        let Numero_cadena = (cadena.split(" "))[1];
        cadena_aux = Numero_cadena;
    }

    return cadena_aux.split(delimitador_Personalizado).reduce((resultado, segmento) => {
        if (segmento.includes('-')) {
            let numero2tipo = segmento.split('-');
            for (const numeroStr of numero2tipo) {
                const numero = parseInt(numeroStr);
                if (NumeroMenorque1000(numero)) {
                    resultado += numero;
                }
            }
        } else if (segmento.includes(',')) {
            let numero2tipo = segmento.split(',');
            for (const numeroStr of numero2tipo) {
                const numero = parseInt(numeroStr);
                if (NumeroMenorque1000(numero)) {
                    resultado += numero;
                }
            }
        } else {
            if (NumeroMenorque1000(Number(segmento))){
                resultado += Number(segmento);
            }
        }
        return resultado;
    }, 0);
}

function NumeroMenorque1000(numero)
{
    let esmenor = false;
    if(numero < 1000) {
        esmenor = true;
    }
    return esmenor;
}

export default Calculadora_de_Cadena;
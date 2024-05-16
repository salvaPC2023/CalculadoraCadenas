function calculadoraDeCadena(cadena) {
    if (cadena === "") {
        return 0;
    }

    let delimitadorPersonalizado = obtenerDelimitadorPersonalizado(cadena);
    let cadenaAux = obtenerCadenaAuxiliar(cadena, delimitadorPersonalizado);

    return calcularSuma(cadenaAux, delimitadorPersonalizado);
}

function obtenerDelimitadorPersonalizado(cadena) {
    if (!cadena.startsWith("//")) {
        return ',';
    }

    let delimitadorPersonalizado = '';
    let indice = 3;

    while (indice < cadena.length && cadena[indice] !== ']') {
        delimitadorPersonalizado += cadena[indice];
        indice++;
    }

    return delimitadorPersonalizado;
}

function obtenerCadenaAuxiliar(cadena, delimitadorPersonalizado) {
    if (delimitadorPersonalizado === ',') {
        return cadena;
    }

    return cadena.split(" ")[1];
}

function calcularSuma(cadena, delimitador) {
    return cadena.split(delimitador).reduce((resultado, segmento) => {
        if (segmento.includes('-') || segmento.includes(',')) {
            let numeros = segmento.split(/-|,/);
            for (const numeroStr of numeros) {
                const numero = parseInt(numeroStr);
                if (numeroMenorQue1000(numero)) {
                    resultado += numero;
                }
            }
        } else {
            const numero = Number(segmento);
            if (numeroMenorQue1000(numero)){
                resultado += numero;
            }
        }
        return resultado;
    }, 0);
}

function numeroMenorQue1000(numero)
{
    let esmenor = false;
    if(numero < 1000) {
        esmenor = true;
    }
    return esmenor;
}

export default calculadoraDeCadena;
function Calculadora_de_Cadena(cadena) {
    if (cadena === "") 
    {
        return 0;
    }

    return cadena.split(',').reduce((resultado, segmento) => {
        if (segmento.includes('-')) {
            const [inicio, fin] = segmento.split('-').map(Number);
            for (let contador = inicio; contador <= fin; contador++) resultado += contador;
        } else {
            resultado += Number(segmento);
        }
        return resultado;
    }, 0);
}

export default Calculadora_de_Cadena;
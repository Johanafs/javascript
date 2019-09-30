
let numero = 128;
function raiz(pNumero) {
    return pNumero ** 0.5;
}

function sacarResultado(pRaiz) {
    console.log(`El resultado de la raiz del ${numero} es ${pRaiz} `);
}
sacarResultado(raiz(numero));

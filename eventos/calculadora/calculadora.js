var botones = document.getElementsByClassName('btn');
var primerNumero = 0;
var segundoNumero = 0;
var operacion = "";
var input = document.getElementById('valores');

for (boton of botones) {
    boton.addEventListener('click', detectarBoton);
}

function detectarBoton(event) {
    switch (event.target.innerText) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            input.value += event.target.innerText;
            break;

        case "SUMA":
        case "RESTA":
        case "MULTIPLICACION":
            primerNumero = parseInt(input.value);
            input.value = "";
            operacion = event.target.innerText
            break;

        case "IGUAL":
            segundoNumero = parseInt(input.value);
            input.value = "";
            obtenerResultado(primerNumero, segundoNumero, operacion);

    }
}

function obtenerResultado(pNumero1, pNumero2, pOperacion) {
    switch (pOperacion) {
        case "SUMA":
            input.value = suma(pNumero1, pNumero2);
            break;
        case "RESTA":
            input.value = resta(pNumero1, pNumero2);
            break;

        case "MULTIPLICACION":
            input.value = multiplicacion(pNumero1, pNumero2);
            break;
    }

}

//operaciones 
function suma(pNumero1, pNumero2) {
    return pNumero1 + pNumero2;
}

function resta(pNumero1, pNumero2) {
    return pNumero1 - pNumero2;
}

function multiplicacion(pNumero1, pNumero2) {
    return pNumero1 * pNumero2;
}
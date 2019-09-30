var cocheRojo = document.getElementById('coche1');
var h1 = document.getElementById('mensaje');
var avanceRojo = 0;
var nitro = 3;
const POSICION_FINAL = 690;

document.addEventListener('keydown', acelerarRojo);

function acelerarRojo(event) {
    //console.log(event);
    switch (event.keyCode) {
        case 32:
            //acelerar / space
            avanceRojo += 15;
            break;

        case 78:
            //oxido nitroso /
            if (nitro > 0) {
                avanceRojo += 40;
                nitro--;
            }
            break;
    }


    if (avanceRojo >= POSICION_FINAL) {
        pararTodo('Rojo');
    } else {
        cocheRojo.style.marginLeft = avanceRojo + "px";
    }


}

var cocheAmarillo = document.getElementById('coche2');
var avanceAmarillo = 0;

var intervalo = setInterval(acelerarAmarillo, 100);

function acelerarAmarillo() {
    avanceAmarillo += 10;


    if (avanceAmarillo >= POSICION_FINAL) {
        pararTodo('Amarillo');
    } else {
        cocheAmarillo.style.marginLeft = avanceAmarillo + "px";
    }

}



var cocheAzul = document.getElementById('coche3');
var avanceAzul = 0;

var intervalo2 = setInterval(acelerarAzul, 100);

function acelerarAzul() {
    avanceAzul += Math.random() * 25;


    if (avanceAzul >= POSICION_FINAL) {
        pararTodo('Azul');
    } else {
        cocheAzul.style.marginLeft = avanceAzul + "px";
    }

}


function pararTodo(pNombreCoche) {
    h1.innerText = "Ha ganado " + pNombreCoche;
    //como paro tanto los intervalos como los listener.
    //removeEventListener para el evento de keydown del rojo
    document.removeEventListener('keydown', acelerarRojo);

    //clear interval para el evento del intervalo.
    clearInterval(intervalo); //para amarillo
    clearInterval(intervalo2); //para el azul


}
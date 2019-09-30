var escenario = document.getElementById('escenario');
var mario = document.getElementById('runner');
var avance = 0;

var intervalo = setInterval(avanceEscenario, 100);

function avanceEscenario() {
    avance -= 15;
    escenario.style.backgroundPositionX = avance + "px";
}

document.addEventListener('keypress', saltarMario);
document.addEventListener('keyup', volverMario);

function saltarMario(e) {
    if (e.keyCode == 32) {
        mario.style.bottom = '80px';
        mario.getElementsByTagName('img')[0].src = 'images/salto.gif';
    }

}

function volverMario(e) {
    if (e.keyCode == 32) {
        mario.style.bottom = '30px';
        mario.getElementsByTagName('img')[0].src = 'images/mario.gif';
    }

}
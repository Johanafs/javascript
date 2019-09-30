var imagen = document.getElementById('imagen');
var imagenInicial = parseInt(Math.random() * 3) + 1;
var avance = imagenInicial;

imagen.src = "images/imagen_" + imagenInicial + ".jpg";

var btnIzq = document.getElementById('izq');
var btnDer = document.getElementById('der');

btnIzq.addEventListener('click', cargarImagen);
btnDer.addEventListener('click', cargarImagen);

//crear intervalos para llamar un funcion cada X segundos.

var intervalo = setInterval(moverCarrusel, 3000);

function moverCarrusel() {
    console.log('moviendo');
    avance++;
    if (avance >= 4)
        avance = 1;
    imagen.src = "images/imagen_" + avance + ".jpg";
}


function cargarImagen(event) {

    switch (event.target.id) {
        case "izq":
            //restar uno
            avance--;
            if (avance <= 0)
                avance = 3;
            break;

        case "der":
            //sumar uno
            avance++;
            if (avance >= 4)
                avance = 1;
            break;
    }
    console.log(avance);
    imagen.src = "images/imagen_" + avance + ".jpg";
}
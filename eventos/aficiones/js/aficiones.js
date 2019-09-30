var listaAficiones = new Array();
var ul = document.getElementById('aficiones');

//var registro = {nombre: "Pepe Villuela", aficion: "romper sillas"};

var boton = document.querySelector('#btn');
boton.addEventListener('click', guardarDatos);

function guardarDatos(event) {
    event.preventDefault();

    var vnombre = document.getElementById('nombre').value;
    var vaficion = document.getElementById('aficion').value;

    var registro = {
        nombre: vnombre,
        aficion: vaficion
    };

    guardarInArray(registro);
    // pintarLista(listaAficiones);
    pintarRegistro(registro);
}

function guardarInArray(pRegistro) {
    listaAficiones.push(pRegistro);
}


// function pintarLista(pLista) {
//     var ul = document.getElementById('aficiones');
//     var contenido = "";
//     for (registro of pLista) {
//         contenido += '<li><strong>' + registro.nombre + ':</strong> ' + registro.aficion + '</li>';
//     }

//     ul.innerHTML = contenido;
// }


function pintarRegistro(pRegistro) {
    var li = document.createElement('li');
    var texto = document.createTextNode(pRegistro.nombre + ': ' + pRegistro.aficion);
    li.appendChild(texto);
    ul.appendChild(li);
}
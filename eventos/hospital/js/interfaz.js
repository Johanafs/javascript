var selectDiagnostico = document.getElementById('selectDiagnostico');
var selectEdad = document.getElementById('selectEdad');

//pintar el contenido dentro de los options del select recorriendo el array de pacientes.

var listaEnfermedades = [...new Set(listaDePacientes.map(paciente => paciente.diagnostico))];


// console.log(listaEnfermedades);

// var listaEnfermedades = new Array();

// for (paciente of listaDePacientes) {
//     listaEnfermedades[paciente.diagnostico] = paciente.diagnostico;
// }

for (enfermedad of listaEnfermedades) {
    selectDiagnostico.innerHTML += '<option value="' + enfermedad + '">' + enfermedad + '</option>';
}

selectDiagnostico.addEventListener('change', obtenerDiagnostico);
selectEdad.addEventListener('change', obtenerEdades);
// selectEdad.addEventListener('blur', obtenerEdades);

function obtenerDiagnostico(e) {
    filtrarPorDiagnostico(listaDePacientes, e.target.value);
}

function obtenerEdades(e) {
    var listaOpciones = e.target.options;
    // console.log(listaOpciones);

    var listaSeleccionados = new Array();

    for (var i = 1; i < listaOpciones.length; i++) {
        if (listaOpciones[i].selected) {
            listaSeleccionados.push(listaOpciones[i].value);
        }
        if (listaSeleccionados.length == 2) {
            break;
        }
    }
    //console.log(listaSeleccionados);
    filtrarPorEdad(listaDePacientes, listaSeleccionados[0], listaSeleccionados[1]);
}
var listaDePacientes = [
    paciente1 = {
        'nombre': 'Juan',
        'apellido': 'Lopez',
        'diagnostico': 'Fiebre',
        'edad': 37,
        'numeroSegSoc': 'A374132941',
    },

    paciente2 = {
        'nombre': 'Mario',
        'apellido': 'Garcia',
        'diagnostico': 'Gastroenteritis',
        'edad': 20,
        'numeroSegSoc': 'A001132942',
    },

    paciente3 = {
        'nombre': 'Ana',
        'apellido': 'Martinez',
        'diagnostico': 'Faringitis',
        'edad': 42,
        'numeroSegSoc': 'A002132940',
    },

    paciente4 = {
        'nombre': 'Bea',
        'apellido': 'Rodriguez',
        'diagnostico': 'Tos',
        'edad': 15,
        'numeroSegSoc': 'A003132941',
    },

    paciente5 = {
        'nombre': 'Carlos',
        'apellido': 'Chacon',
        'diagnostico': 'Gripe',
        'edad': 19,
        'numeroSegSoc': 'A004132940',
    },

    paciente6 = {
        'nombre': 'Olivia',
        'apellido': 'Perez',
        'diagnostico': 'Gripe',
        'edad': 27,
        'numeroSegSoc': 'A005132941',
    },

    paciente7 = {
        'nombre': 'Paula',
        'apellido': 'Vega',
        'diagnostico': 'Bronquitis',
        'edad': 22,
        'numeroSegSoc': 'A006132941',
    },

    paciente8 = {
        'nombre': 'Pablo',
        'apellido': 'Carrera',
        'diagnostico': 'Otitis',
        'edad': 51,
        'numeroSegSoc': 'A007132940',
    },

    paciente9 = {
        'nombre': 'Manuel',
        'apellido': 'Nieto',
        'diagnostico': 'Gripe',
        'edad': 82,
        'numeroSegSoc': 'A008132940',
    },

    paciente10 = {
        'nombre': 'Ramon',
        'apellido': 'Dominguez',
        'diagnostico': 'Sinusitis',
        'edad': 12,
        'numeroSegSoc': 'A009132941',
    }
];


//El programa va a realizar las siguiente funcionalidades.

//sacara por pantalla todos los pacientes de entre 18 y 25 años

//sacar por pantalla todos los pacientes que tengan gripe.

//sacar por pantalla todos los pacientes cuyo numero de la seguridad social acabe en 0.

function filtrarPorEdad(pLista, pEdadMinima, pEdadMaxima) {
    var contenido = "";

    for (var i = 0; i < pLista.length; i++) {

        if (pLista[i].edad >= pEdadMinima && pLista[i].edad <= pEdadMaxima) {

            contenido += pintarPaciente(pLista[i]);
        }

    }

    if (contenido != "") {
        document.write(contenido);
    }
    else {
        document.write('No hay resultados');
    }

}

filtrarPorEdad(listaDePacientes, 20, 41);



function filtrarPorDiagnostico(pLista, pDiagnostico) {
    var contenido = "";

    for (paciente of pLista) {
        if (paciente.diagnostico == pDiagnostico) {
            contenido += pintarPaciente(paciente)
        }

    }

    if (contenido != "") {
        document.write(contenido);
    }
    else {
        document.write('No hay resultados');
    }

}

// filtrarPorDiagnostico(listaDePacientes, 'Gripe');


function filtrarNumeroSS(pLista, pValor) {
    var contenido = "";

    for (paciente of pLista) {
        var ultimoDigito = paciente.numeroSegSoc[paciente.numeroSegSoc.length - 1];
        if (ultimoDigito == pValor) {
            contenido += pintarPaciente(paciente)
        }
    }

    if (contenido != "") {
        document.write(contenido);
    }
    else {
        document.write('No hay resultados');
    }

}

//filtrarNumeroSS(listaDePacientes, "0");

function pintarPaciente(pPaciente) {

    contenido = '<div><h2 style="color:red">' + pPaciente.nombre + ' ' + pPaciente.apellido + '</h2><ul><li>Edad: ' + pPaciente.edad + '</li><li>Enfermedad: ' + pPaciente.diagnostico + '</li><li>NumeroSS: ' + pPaciente.numeroSegSoc + '</li></ul><hr></div>'

    return contenido;
}
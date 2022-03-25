import Modulo from './modulos.js';

let modulo = new Modulo(2019, 2020);
let showAllAlumns = modulo.listadoAlummnos;
modulo.setAlumno();
modulo.setAlumno();

function allAlumnos() {
    alert(JSON.stringify(showAllAlumns, ",", " "));
}

function byMatricula() {
    let alumnoByMatri;
    let matricula = prompt("Por favor ingrese el numero de la matricula del alumno: ");
    matricula = parseInt(matricula);
    for (let i of showAllAlumns) {
        if (i.matricula === matricula) {
            alumnoByMatri = i;
        }
    }

    if (alumnoByMatri === undefined) {
        alert(`Este numero ${matricula} no corresponde a ningun alumno.`)
    } else {
        alert(JSON.stringify(alumnoByMatri, ",", " "));
    }
}

//allAlumnos();
byMatricula();
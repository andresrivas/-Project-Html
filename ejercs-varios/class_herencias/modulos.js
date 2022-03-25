/*  Crear una clase Módulo con los siguientes atributos:>>  Listado_alumnos, fecha_inicio,fecha_fin.
El listado de alumnos deberá ser tipo Lista y contener objetos de tipo Alumno creado en el ejercicio anterior.
En la misma clase Módulo deberá implementar métodos para>>  agregar objetos Alumno a la Lista>>  buscar un alumno>>
  mostrar todos los alumnos con estatus_inscrito == True .
*/
import Alumno from './clases.js'

export default class Modulo {
    listadoAlummnos = [];

    constructor(fechaInicio, fechaFin) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.setAlumno();
    }

    setAlumno() {
        this.listadoAlummnos.push(new Alumno(prompt("matricula: "), prompt("nombre: "), prompt("apellidos: "),
            prompt("correo: "), prompt("indica con true o false el estatus del alumno: ")));
        // alert(JSON.stringify(this.listadoAlummnos, ",", " "));
    }

    searchAlumn() {
        let search = prompt('Por favor ingrese el correo electronico del alumno: ');
        let alumno;
        for (let i of this.listadoAlummnos) {
            if (i.correo === search) {
                alumno = i;
            }
        }

        if (alumno === undefined) {
            alert("Ese correo no se corresponde con ningun alumno.")
        } else {
            alert(JSON.stringify(alumno, ",", " "));
        }
    }

    showAlumno() {
        let alumnos = [];
        for (let x of this.listadoAlummnos) {
            if (x.estatus === true) {
                alumnos.push(x);
            }
        }

        if (alumnos.length === 0) {
            alert("Lo sentimos pero no hay ningun alumno con el estatus de inscrito.")
        } else {
            alert(JSON.stringify(alumnos, ",", " "));
        }
    }
}




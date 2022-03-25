/* Crear una clase Alumno con los siguientes atributos:>>  numero_matricula, nombre, apellido, correo_electronico,estatus_inscrito.
La matrícula deberá ser numérica, mientras que correo_electronico, nombre y apellido como textos.
El  atributo estatus_inscrito deberá ser un valor booleano.
*/

export default class Alumno {
    constructor(matricula, nombre, apellidos, correo, estatus) {
        this.matricula = parseInt(matricula);
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.estatus = estatus === "true" ? estatus = true : estatus = false;
    }
}

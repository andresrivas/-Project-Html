/*
 Crear un programa que reciba el nombre y las calificaciones de N personas, mientras que el usuario no escriba “terminar”.
 Al terminar  deberá mostrar la media de calificaciones de cada persona.
*/

/** Creamos un objeto constructor que recibe como parametro una funcion a esto se le llama (callback) **/

function Personas(nombre, callback) {
    this.nombre = nombre;
    this.misNotas = callback();
}

/** Funcion que nos permitira añadir todas las notas de los alumnos que queramos **/

function notas() {
    let listaNotas = [];
    let nota;
    let stop = true;
    alert("Escribir las notas del alumno solo en el rango del 0 al 10, cualquier otra cosa servira para salir");
    while (stop) {
        nota = prompt("Nota del alumno: ");
        if (nota >= 0 && nota <= 10) {
            listaNotas.push(nota);
        } else {
            stop = false;
        }
    }
    return listaNotas;
}

/** Este metodo nos sirve para controlar el flujo de los alummnos que queramos añadir a una lista **/

function finish(valor) {
    if (valor === "terminar") {
        return false;
    }
    return true;
}

/** Metodo que recibe como parametro una lista de todos los alumnos con sus notas, con lo que accederemos a las
    notas y sacaremos la media, para a continuacion añadir a cada objeto alumno la media de sus notas **/

function mediaNotasAlumnos(notasAlumnos) {
    let media;
    let mediaNotas = 0;
    let mayorToMenor = [];
    if (notasAlumnos !== 0) {
        for (let i in notasAlumnos) {
            media = notasAlumnos[i].misNotas;
            for (let i = 0; i < media.length; i++) {
                mediaNotas += parseInt(media[i]);
            }
            mediaNotas = mediaNotas / media.length;
            mediaNotas = mediaNotas.toFixed(1);
            notasAlumnos[i].media = mediaNotas;
            mediaNotas = 0;
        }
    }

/* Modificacion del ejercicio 23 para sacar las medias de los alumnos de manera ordenadas de mayor a menor  ---> kc_ej24.js*/

    for (let i in notasAlumnos) {
        mayorToMenor.push(notasAlumnos[i].media);
    }
    mayorToMenor.sort((a, b) => a - b);
    mayorToMenor.reverse();
    for (let x = 0; x < mayorToMenor.length; x++) {
        for (let i in notasAlumnos) {
            if (notasAlumnos[i].media === mayorToMenor[x]) {
                alert(notasAlumnos[i].nombre + " " + notasAlumnos[i].media);
            }
        }
    }
}

/** Con esta funcion crearemos todos los alumnos que queramos llamando al constructor pasandole el nombre y el callback **/

function personasNotas() {
    let alumnos = [];
    let keep = true;
    while (keep) {
        alumnos.push(new Personas(prompt("Nombre del alumno: "), notas));
        keep = finish(prompt("Para finalizar escriba (terminar) o cualquier otra tecla para continuar: "));
        if (keep === false) {
            keep = false;
        }
    }

    mediaNotasAlumnos(alumnos);
}

/** Aqui empieza el proceso llamando al primer metodo que a su vez llamara a los demas **/

personasNotas();



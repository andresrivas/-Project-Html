
/* Crear un programa que reciba el nombre y las calificaciones de 3 personas.
   Para cada persona deberá guardar la información en una tupla. El programa no mostrará resultados de salida. */

var per1 = {
    nombre: "julio",
    nota: 4
}

var per2 = {
    nombre: "tomas",
    nota: 8
}

var per3 = {
    nombre: "sergio",
    nota: 2
}

function calificacionPersonas(a, b, c) {
    let tupla = [a.nota, b.nota, c.nota];
    let tupla2 = [a, b, c];
    let tupla3 = [];
    let trampa;

    for (let i = 0; i < tupla.length; i++) {
        if (tupla[i] < tupla[i + 1]) {
            trampa = tupla[i];
            tupla[i] = tupla[i + 1];
            tupla[i + 1] = trampa;
        }
    }

    for (let z = 0; z < tupla.length; z++) {
        for (let x in tupla2) {
            if (tupla[z] === tupla2[x].nota) {
                tupla3.push(tupla2[x]);
            }
        }
    }
    console.log(tupla3);
}

calificacionPersonas(per1, per2, per3);
/* Crear un programa que reciba los nombres y edades de 10 personas.
   Mostrar únicamente los nombres de las personas que tienen derecho  a votar (mayores a 18años).*/

function Personas(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let gente = [];

function quienPuedeVotar(gente) {
    let genteVotar = [];
    if (gente.length === 0) {
        for (let i = 1; i <= 5; i++) {
            gente.push(new Personas(prompt("Ingrese el nombre de la persona " + i),
                prompt("Ingrese la edad de la persona " + i)));
        }
    }
    for (let x in gente) {
        if (gente[x].edad >= 18) {
            genteVotar.push(gente[x].nombre + " con " + gente[x].edad + " años");
        }
    }
    alert("Los unicos que pueden votar son : " + genteVotar);
}

quienPuedeVotar(gente);
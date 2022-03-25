/* Crear un programa que muestre los números naturales del 1 al N. */

function numerosBucle(numero) {
    for (var i = 1; i <= numero; i++) {
        console.log(i);
    }
}

numerosBucle(8);

/******/

/* Los numeros pares de una lista de numeros: */

function numerosPares(arrayNumeros) {
    let arrayPares = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            arrayPares.push(arrayNumeros[i]);
        }
    }
    alert("Son pares : " + arrayPares);
}

function litasNumros() {
    let arrayNumeros = [];
    alert("Por favor ingrese 10 numeros : ");
    for (let i = 0; i < 10; i++) {
        arrayNumeros.push(prompt(`Numero ${i} : `));
    }
    numerosPares(arrayNumeros);
}

litasNumros();


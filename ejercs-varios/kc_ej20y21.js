/* kc_ej20 :

Crear un programa que escriba la suma de los números del 1 a N, donde N será dado por el usuario.


/************


const numeroDado = prompt("Dado el numero : ");

function sumaNumeros(numero) {
    var arrayString = new String(numero);
    var numerosSuma = "";
    var suma = 0;
    for (let i = 0; i < arrayString.length; i++) {
        numerosSuma += arrayString[i].replace(",", "+");
    }

    for (let i = 0; i < numero.length; i++) {
        suma += numero[i];
    }
    alert(`La suma de 1 a ${numeroDado} es :\n\n ${numerosSuma} = ${suma}`);
}

function getNumero() {
    let arraySuma = [];
    for (let i = 1; i <= numeroDado; i++) {
        arraySuma.push(i);
    }
    sumaNumeros(arraySuma);
}

getNumero();


************/

/* kc_ej21 :  */

/*  Crear un programa que reciba un número natural entero y muestre su tabla de multiplicar del 1 al 10. */

function tablaMultiplicar(numero) {
    let arrayMult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = 0;
    for (let i = 1; i <= arrayMult.length; i++) {
        result = numero * i;
        console.log(`${numero} x ${i} = ${result}`);
    }
}

tablaMultiplicar(2);
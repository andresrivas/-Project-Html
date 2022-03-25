/* Crear un programa que contenga una Lista de nombres. Solicitar un índice de la lista
   y mostrar el valor del índice. El programa deberá validar que el índice es válido.*/

function misAmigos(a) {
    let lista = [{
        0: "Pedro Picapiedra"
    }, {
        1: "Pablo marmol"
    }, {
        2: "Bob Esponja"
    },{
        3: "patricio"
    }];

    if (a >= 0 && a <= lista.length) {
        for (let i = 0; i < lista.length; i++) {
            for (let x in lista[i]) {
                if (x == a) {
                    console.log(lista[x]);
                }
            }
        }
    } else {
        console.log("Este indice no se encuentra en la lista");
    }
}

misAmigos(2);
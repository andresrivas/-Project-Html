/* Crear un programa que contenga un diccionario con nombres y correos electrónicos.
   Solicitar el nombre de una persona y mostrar su correo electrónico.
   Indicar con un mensaje apropiado cuando no se  encuentre un resultado válid */

var misAmigos = {
    pedro: "pedro.picapiedra@gmail.com",
    pablo: "pmarmol123@gmail.com",
    bob: "bob@gmail.com"
}

function correoAmigo(nombre) {
    var cont = 0;
    for (var x in misAmigos) {
        if (nombre === x) {
            console.log(misAmigos[x]);
            cont++;
        }
    }
    if (cont === 0) {
        console.log("Este nombre no esta en el diccionario");
    }
}

correoAmigo("bob");


/*
*** Esto es un construuctor : ***



function Amigos(nombre, edad, trabajo) {
    this.nombre = nombre;
    this.edad = edad;
    this.trabajo = trabajo;
    this.mensaje = ("Me llamo " + nombre + " tengo " + edad + " años y trabajo como " + trabajo);
}

var myFriend = new Amigos("keko", 34, "programador");

console.log(myFriend.mensaje);

*/
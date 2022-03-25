/* Crear un programa con una función pintar_fila() que arme las filas de una tabla html.
   Completarel  programa con la estructura de una tabla e invocando a la función N veces,
   donde N es un valor  introducido por el usuario. */

function create_filas() {
    let row;
    let column;
    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    let numberRow = prompt("How many row do you want? : ");
    for (let i = 0; i < numberRow; i++) {
        row = document.createElement("tr");
        for (let x = 0; x < numberRow; x++) {
            column = document.createElement("td");
            row.appendChild(column);
        }
        tabla.appendChild(row);
    }

    body.appendChild(tabla);
    tabla.setAttribute("border", "4");
    tabla.setAttribute("Height", "200");
    tabla.setAttribute("width", "400");
}



/* Crear un programa que contenga una función es_palindromo(texto) y determine si dicho texto es un  palíndromo */

let palidromo = (texto) => {
    texto = texto.replace(/ /g, "");
    texto = texto.replace(/[,:.!"·¡$%&()=?¿]/g, "");
    texto = texto.toLowerCase();
    let size = texto.length;
    for (let i = 0; i < texto.length; i++) {
        size--;
        if (texto.charAt(i) === texto.charAt(size)) {
            if (size === i || size < i) {
                return console.log("this phrase is palindrome");
            }
        } else {
            return console.log("this phrase isn't palindrome");
        }
    }
};


palidromo("Logra Casillas alli sacar gol");
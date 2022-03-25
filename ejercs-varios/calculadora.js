function calculadora(a, b) {
    console.log(`${"que quiere hacer con estos dos numeros : "}${a} ${"y"} ${b}`);
    let aux = prompt("Elige de entre estas opciones: (/)(*)(-)(+)(%)(**)");
    let result;
    if (aux == "/" || aux == "*" || aux == "%" || aux == "+" || aux == "-" || aux == "**") {
        switch (aux) {
            case "/":
                result = a / b;
                break;
            case "*":
                result = a * b;
                break;
            case "%":
                result = a % b;
                break;
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "**":
                result = a ** b;
        }
    } else {
        console.log("El operador seleccionado es incorrecto pruebe con: (/)(*)(-)(+)(%)(**)");
    }
    return result;
}

console.log(calculadora(30, 2));
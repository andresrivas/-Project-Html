function filtroNumero(number) {
    if (number == 0) {
        console.log("es : " + number);
    } else {
        if (number > 0) {
            if (number % 2 == 0) {
                console.log(`${number} ${"es un numero positivo par"}`);
            } else {
                console.log(`${number} ${"es un numero positivo impar"}`);
            }
        } else {
            if (number % 2 == 0) {
                console.log(`${number} ${"es un numero negativo par"}`);
            } else {
                console.log(`${number} ${"es un numero negativo impar"}`);
            }
        }
    }
}


filtroNumero(0000);
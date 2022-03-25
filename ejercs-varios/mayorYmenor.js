function mayorYmenor(a, b, c) {
    let mayor;
    let menor;
    if (a > b) {
        if (a > c) {
            if (c > b) {
                menor = b;
                mayor = a;
            }
        } else {
            menor = b;
            mayor = c;
        }
    } else {
        if (a > c) {
            menor = c;
            mayor = b;
        } else {
            if (c > b) {
                menor = a;
                mayor = c;
            } else {
                menor = a;
                mayor = b;
            }
        }
    }
    console.log("mayor->" + mayor);
    console.log("menor->" + menor)
}

mayorYmenor(5, 19, 2);

/*  Crear un programa que contenga una lista de 20 números y muestre
  un rango de la lista. El inicio y fin del rango serán introducidos por el
  usuario y el programa deberá validar que sean valores válidos.  */


function rangoNumeros(a, b) {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let lista2 = [];
    let test;
    let num1;
    let num2;
    if (a > 1 && a <= 20 && b > 1 && b <= 20) {
        for (let i = 0; i < lista.length; i++) {
            test = lista[i];
            if (a === test) {
                num1 = test;
            } else if (b === test) {
                num2 = test;
            }
        }
        if (a < b) {
            for (let x = a + 1; x <= b; x++) {
                lista2.push(x);
            }
        } else {
            for (let x = b + 1; x <= a; x++) {
                lista2.push(x);
            }
        }
    } else {
        console.log(`${a} o ${b} estan fuera del rango de la lista`)
    }

    console.log(`${lista2}`);
}

rangoNumeros(19, 2);


/*

  Crearunprogramaquecontengaunalistade20númerosymuestre
  unrangodelalista.Elinicioyfindelrangoseránintroducidosporel
  usuarioyelprogramadeberávalidarquesean valoresválidos.  */
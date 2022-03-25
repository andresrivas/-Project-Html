/*

Crear un programa que simule una máquina expendedora de gaseosas con las siguientescaracterísticas:
    •Las bebidas disponibles son: Fanta, Pepsi,7Up.
    •Todas las bebidas tienen un costo de €1,0
    •La máquina recibe monedas de 10, 20 y 50 cent, y €1,0
El programa deberá permitir que el usuario seleccione una bebida e ingrese una a una las monedas.
El  programa deberá detenerse cuando el importe de la gaseosa haya sido completado y, de ser necesario, determinar elsobrante.

 */


let bebidas = {
    1: "Tu fanta",
    2: "Tu pepsi",
    3: "Tu 7up"
};

let maquinaExpendedora = () => {
    let option = prompt('Que bebida quieres? selecciona el numero : 1. fanta, 2. pepsi, 3. 7up');
    switch (option) {
        case "1":
            return bebidas["1"];
        case "2":
            return bebidas["2"];
        case "3":
            return bebidas["3"];
        default:
            return `El numero no corresponde a ninguna bebida, pruebe con 1, 2 y 3`;
    }
};

function change(bebida) {
    if (bebida === bebidas["1"] || bebida === bebidas["2"] || bebida === bebidas["3"]) {
        let euro = prompt('Las bebidas estan a 1.0 euro, ' +
            'por favor solo se admiten monedas de 10, 20, 50 cent y monedas de 1.0 euros,' +
            'please ingrese moneda: ');
        let cambio = 100;
        if (euro === "10" || euro === "20" || euro === "50" || euro === "1.0") {
            while (cambio >= 0) {
                if (euro == 1.0) {
                    euro = 100;
                    cambio = cambio - euro;
                    cambio = Math.abs(cambio); // Nos da el valor absoluto de un numero.
                    return alert(`Aqui esta su ${bebida} su cambio es ${cambio}`);
                } else {
                    cambio = cambio - euro;
                    if (cambio <= 0) {
                        cambio = Math.abs(cambio);
                        return alert(`Aqui esta su ${bebida} su cambio es ${cambio}`);
                    } else {
                        euro = prompt(`Le faltan ${cambio},por favor continue ingresando monedas: `)
                    }
                }
            }
        } else {
            alert(`Por favor solo monedas 10, 20, 50 y 1.0`);
            bebida = "No se pudo entregar su bebida";
            return bebida;
        }
    } else {
        return bebida;
    }
}

let mybebida = maquinaExpendedora();
mybebida = change(mybebida);
let h = document.getElementById("h1");
h.innerHTML = mybebida;







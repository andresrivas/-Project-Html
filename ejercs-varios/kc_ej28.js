/* Crear un programa que contenga una función pintar_rectangulo(lado, figura).
   Esta función deberá pintar  en consola un cuadrilátero de lado x lado con la figura proporcionada */

function pintarFigura(lado, figura) {
    let i = 0;
    let z = 0;
    let y = 1;
    let x = 0;
    for (i = 0; i < lado; i++) {
        if (i === 0) {
            for (x = 0; x < lado; x++) {
                process.stdout.write(figura);
            }
        } else {
            console.log();
            y++;
            if (y !== lado) {
                for (z = 0; z < lado; z++) {
                    if (z + 1 === lado || z === 0) {
                        process.stdout.write(figura);
                    } else {
                        process.stdout.write(" ");
                    }
                }
            } else {
                for (z = 0; z < lado; z++) {
                    process.stdout.write(figura);
                }
            }
        }
    }
}


pintarFigura(5, "*");
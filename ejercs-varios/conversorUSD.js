function conversor(euros) {

    let answers = prompt("¿Desea cambiar a USD :  Yes/No");
    if (answers != "yes" && answers != "no") {
        alert("Por favor pruebe la proxima vez con : Yes/No");
    } else {
        answers == "yes";
        if (answers == "yes") {
            let usd = euros * 1.10;
            return usd;
        } else {
            return euros;
        }
    }

}

let euros = 50;
let dolares = conversor(euros);
console.log(`${euros} ${"euros equivalen a:"} ${dolares === euros ? euros + " E" : dolares + "$"} `);



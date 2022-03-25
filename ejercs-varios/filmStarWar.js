var numRomanos = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
}

function starWars(film) {
    if (film > 0 && film < 10) {
        let romano = numRomanos[film];
        switch (film) {
            case 1:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " La amenaza fantasma.");
                break;
            case 2:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " El ataque de los clones.");
                break;
            case 3:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " La venganza de los Sith.");
                break;
            case 4:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " Una nueva esperanza.");
                break;
            case 5:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " El imperio contraataca.");
                break;
            case 6:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " El retorno del Jedi.");
                break;
            case 7:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " El despertar de la fuerza.");
                break;
            case 8:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " El último Jedi.");
                break;
            case 9:
                console.log("Star Wars ep : " + `${film} o ${romano}` + " El ascenso de Skywalker.");
                break;
        }
    } else {
        console.log("La saga star wars no tiene ninguna pelicula que corresponda con ese numero")
    }
}

starWars(9);

/*

Star Wars ep 1: La amenaza fantasma

Star Wars ep 2: El ataque de los clones

Star Wars ep 3: La venganza de los Sith

Star Wars ep 4: Una nueva esperanza

Star Wars ep 5: El imperio contraataca

Star Wars ep 6: El retorno del Jedi

Star Wars ep 7: El despertar de la fuerza

Star Wars ep 8: El último Jedi

Star Wars ep 9: El ascenso de Skywalker

*/
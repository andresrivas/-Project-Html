function Persona(dia, mes, año) {
    this.dia = dia;
    this.mes = mes;
    this.año = año;
}

/* 
var persona1 = {
    dia: 1,
    mes: "mayo",
    año: 1980
};

var persona2 = {
    dia: 20,
    mes: "junio",
    año: 1979
};
*/

function comparacionPerson(p1, p2) {
    let per1 = p1.dia + " " + p1.mes + " " + p1.año;
    let per2 = p2.dia + " " + p2.mes + " " + p2.año;
    if (per1 === per2) {
        console.log(`${"Las dos personas nacieron el mismo dia : "}${"Juan el"} ${per1} ${"and"} ${"Pepe el"} ${per2}`);
        return true;
    } else {
        console.log("No se parecen en nada");
        return false;
    }
}


//comparacionPerson(persona1, persona2);

// vamos a modificar las fecha de nacimiento de las personas

let persona1 = new Persona(5, "enero", 1990);
let persona2 = new Persona(5, "enero", 1990);


console.log(comparacionPerson(persona1, persona2));

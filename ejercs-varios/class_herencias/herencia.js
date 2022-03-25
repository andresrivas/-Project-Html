import Alumno from './clases.js'

class AlumnoRemoto extends Alumno {
    constructor(skype, husoHorario) {
        super(1, "ch", "sp", "cccc@cc.com", false);
        this.skype = skype;
        this.husoHorario = husoHorario;
    }
}

class AlumnoPresencial extends Alumno {
    constructor(numeroAsiento) {
        super(2, "ko", "al", "kkkk@kk.com", true);
        this.numeroAsiento = numeroAsiento;
    }
}

let alumnoRemot = new AlumnoRemoto("ch@ch.com", 20);
let AlumnoPresen = new AlumnoPresencial(27);
alert(JSON.stringify(alumnoRemot, ",", " "));
alert(JSON.stringify(AlumnoPresen, ",", " "));
/* Crear un programa que contenga un número aleatorio del 1 al 100, sin mostrarlo,
   y permitir que el  usuario intente adivinarlo. El usuario solamente tendrá 5 oportunidades,
   en cada oportunidad fallida se le  darán pistas para saber si debe intentar con un número mayor o menor. */

let magicNumber = Math.round((Math.random() * (100 - 1) + 1));

let giveMeToTrack = () => {
    let attempts = 5;
    let playerNumber = 0;
    for (let i = 0; i < 5; i++) {
        playerNumber = prompt("Try to guess the number between 1 and 100 : ");
        if (playerNumber < magicNumber) {
            attempts--;
            alert(`please try a higher number, you have a ${attempts} attemps left`);
        } else if (playerNumber > magicNumber) {
            attempts--;
            alert(`please try a lower number, you have a ${attempts} attemps left`);
        } else {
            return alert(`congratulations you guessed the number -> ${magicNumber}`);
        }
    }
    return alert(`Sorry, you don't have more attemps the number is -> ${magicNumber}`);
};


giveMeToTrack();

const leer = require('prompt-sync')();

const hero02 = {
    nombre: "Dumbbledore",
    casa: "Griffindor",
    virtud: "Valentia",
    puntosVida: 100,
    puntosDefensa: 10,
    puntosAtaque: 50,
    mediaSangre: false

};

console.log("ingresa nuevo nombre: ");
hero02.nombre = leer();

console.log("ingresa nuevo valor numerico para puntos de vida: ");
hero02.puntosVida = Number(leer());

console.log("ingresa confirmacion de condicion de media sangre o saltea para negar: ");

hero02.mediaSangre = Boolean(leer());

console.log(hero02);


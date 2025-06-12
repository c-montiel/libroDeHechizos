const leer = require("prompt-sync")();

//Estructura de ejemplo base
//Falta completar
//No es necesario usarlo, pueden usarlo de guia

const tablero = [
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
]; const jugador = {
    posX: 0,
    posY: 5,
}
const alien = {
    posX: 3,
    posY: 5,
    direccionY: 1,
}
const juego = {
    salida: {
        posX: 0,
        posY: 0,
        turnos: 3,
        activa: false,
        alarma: false,
    },
    compuerta: {
        posX: 9,
        posY: 5,
        turnos: 3,
        activa: false,
    },
}

function main() {

    function mostrarTablero(tablero) {
        for (let fila of tablero) {
            console.log(fila.join(" "));
        }
    }

    mostrarTablero(tablero);


};




main();

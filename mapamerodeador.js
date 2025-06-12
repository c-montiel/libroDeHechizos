const leer = require('prompt-sync')();

const tableroMapa = [
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
];

const Harry = {
    caracter: "H",
    posX: getRandomIntInclusive(0, 9),
    posY: getRandomIntInclusive(0, 9)
};

const Scamander = {
    caracter: "S",
    posX: getRandomIntInclusive(0, 7),
    posY: getRandomIntInclusive(0, 7)
};

const MENSAJE_INICIO = "Juro solemnemente que mis intensiones son malas\n";

const MENSAJE_FIN = "Travesura realizada";



// funcion principal del juego
function main() {
    let instruccion = 0;
    console.log(MENSAJE_INICIO);

    posicionarPersonaje(Harry.posX, Harry.posY, Harry.caracter);
    posicionarPersonaje(Scamander.posX, Scamander.posY, Scamander.caracter);
    tablero();

    console.log("\nrealice el movimiento con cualquier tecla\n");
    instruccion = leer();

    if (instruccion) {
        moverPersonaje(Harry);
        moverPersonaje(Scamander);
        tablero()
    }

    if (instruccion == MENSAJE_FIN) {
        console.log(MENSAJE_FIN)
        return
    };
};

// funciones de uso
function tablero() {
    for (let fila of tableroMapa) {
        console.log(fila.join("  "));
    }
};

function posicionarPersonaje(posX, posY, caracter) {
    tableroMapa[posX][posY] = caracter;
};

function getRandomIntInclusive(MIN, MAX) {
    MIN = Math.ceil(MIN);
    MAX = Math.floor(MAX);
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
};

function moverPersonaje(personaje) {
    tableroMapa[personaje.posX][personaje.posY] = ".";

    let nuevaPosX = personaje.posX + getRandomIntInclusive(-1, 1);
    let nuevaPosY = personaje.posY + getRandomIntInclusive(-1, 1);
    nuevaPosX = Math.max(0, Math.min(9, nuevaPosX));
    nuevaPosY = Math.max(0, Math.min(9, nuevaPosY));
    personaje.posX = nuevaPosX;
    personaje.posY = nuevaPosY;

    tableroMapa[personaje.posX][personaje.posY] = personaje.caracter;
}



main();

const leer = require("prompt-sync")();

// matriz de tablero de juego
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
// personajes
const jugador = {
    caracter: "P",
    posX: 5,
    posY: 0,
};

const alien = {
    caracter: "A",
    posX: 5,
    posY: 3,
    direccionX: 1,
    modo: "patrulla"
};

const salida = {
    caracter: "S",
    posX: 0,
    posY: 0,
    turnos: 3,
    activa: false,
    alarma: false
};

const compuerta = {
    caracter: "C",
    posX: 5,
    posY: 9,
    turnos: 0,
    activa: false
};


function main() {
    for (let i = 0; i < 50; i++) {

        posicionarPersonaje(salida.posX, salida.posY, salida.caracter);
        posicionarPersonaje(compuerta.posX, compuerta.posY, compuerta.caracter);
        posicionarPersonaje(jugador.posX, jugador.posY, jugador.caracter);
        posicionarPersonaje(alien.posX, alien.posY, alien.caracter)
        mostrarTablero(tableroMapa);

        console.log("\nMUEVETE REYLY!!!\n");
        instruccion = leer();

        moverJugador(instruccion);
        mostrarTablero(tableroMapa);
        movimientoAlien(alien.modo);
        mostrarTablero(tableroMapa);

        if (jugador.posX == 0 && jugador.posY == 0 && compuerta.activa == false) {
            console.log("debes activar la compuerta!!!");
        }

        if (jugador.posX == 5 && jugador.posY == 9) {
            compuerta.turnos += 1;
            console.log("compuerta activandose en " + compuerta.turnos);

            if (compuerta.turnos >= 3) {
                compuerta.activa = true;
                console.log("compuerta activada");
                console.log("CORRE!!!!");



            }

        }

    };


};

//mostrar matriz de tablero
function mostrarTablero(tableroMapa) {

    for (let fila of tableroMapa) {
        console.log(fila.join("  "));
    }
};

// posiciona objetos en el tablero
function posicionarPersonaje(posX, posY, caracter) {
    tableroMapa[posX][posY] = caracter;
};

// Función para mover al jugador
function moverJugador(direccion) {
    tableroMapa[jugador.posX][jugador.posY] = ".";

    switch (direccion) {
        case 'w': // Arriba
            if (jugador.posX > 0) jugador.posX--;
            break;
        case 'a': // Izquierda
            if (jugador.posY > 0) jugador.posY--;
            break;
        case 's': // Abajo
            if (jugador.posX < tableroMapa.length - 1) jugador.posX++;
            break;
        case 'd': // Derecha
            if (jugador.posY < tableroMapa[0].length - 1) jugador.posY++;
            break;
        case 'q': // Arriba izquierda
            if (jugador.posX > 0 && jugador.posY > 0) { jugador.posX--; jugador.posY--; }
            break;
        case 'e': // Arriba derecha
            if (jugador.posX > 0 && jugador.posY < tableroMapa[0].length - 1) { jugador.posX--; jugador.posY++; }
            break;
        case 'z': // Abajo izquierda
            if (jugador.posX > 0 && jugador.posY < tableroMapa.length - 1) { jugador.posX++; jugador.posY--; }
            break;
        case 'c': // Abajo derecha
            if (jugador.posX < tableroMapa[0].length - 1 && jugador.posY < tableroMapa.length - 1) { jugador.posX++; jugador.posY++; }
            break;
    }
    // muestra de nuevo el tablero actualizado
    tableroMapa[jugador.posX][jugador.posY] = jugador.caracter;

}


function movimientoAlien(modo) {
    tableroMapa[alien.posX][alien.posY] = ".";

    switch (modo) {
        case "patrulla":
            alien.posX += alien.direccionX;
            if (alien.posX <= 0 || alien.posX >= tableroMapa.length - 1) {
                alien.direccionX *= (-1);

            }
            break;
        case "compuertaActiva":
            alien.posY += 3;
    }
}
main();

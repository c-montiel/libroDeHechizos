const leer = require("prompt-sync")();

// Estructura base del tablero (10x10)
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
];

// Definir las posiciones iniciales
const jugador = {
    posX: 0,  // En la mitad del borde izquierdo
    posY: Math.floor(tablero.length / 2),
};

const alien = {
    posX: 3,  // El alien comienza a 3 columnas de la izquierda
    posY: Math.floor(tablero.length / 2),
    direccionY: 1,  // Movimiento inicial hacia abajo (1)
};

const juego = {
    salida: {
        posX: 0,  // Esquina superior izquierda
        posY: 0,
        turnos: 0,
        activa: false,
        alarma: false,
    },
    compuerta: {
        posX: tablero[0].length - 1,  // Lado derecho del tablero
        posY: Math.floor(tablero.length / 2),
        turnos: 0,
        activa: false,
    },
};

// Función para dibujar el tablero
function dibujarTablero() {
    // Limpiar consola antes de redibujar
    console.clear();

    // Copiar el tablero para marcar posiciones
    const tableroTemporal = JSON.parse(JSON.stringify(tablero));

    // Colocar al jugador en el tablero
    tableroTemporal[jugador.posY][jugador.posX] = 'P';

    // Colocar al alien en el tablero
    tableroTemporal[alien.posY][alien.posX] = 'A';

    // Colocar la salida en el tablero
    tableroTemporal[juego.salida.posY][juego.salida.posX] = 'E';

    // Colocar la compuerta en el tablero
    tableroTemporal[juego.compuerta.posY][juego.compuerta.posX] = 'G';

    // Dibujar tablero en consola
    for (let fila of tableroTemporal) {
        console.log(fila.join(" "));
    }
}

// Función para mover al jugador
function moverJugador(direccion) {
    switch (direccion) {
        case 'w': // Arriba
            if (jugador.posY > 0) jugador.posY--;
            break;
        case 'a': // Izquierda
            if (jugador.posX > 0) jugador.posX--;
            break;
        case 's': // Abajo
            if (jugador.posY < tablero.length - 1) jugador.posY++;
            break;
        case 'd': // Derecha
            if (jugador.posX < tablero[0].length - 1) jugador.posX++;
            break;
        case 'q': // Arriba izquierda
            if (jugador.posX > 0 && jugador.posY > 0) { jugador.posX--; jugador.posY--; }
            break;
        case 'e': // Arriba derecha
            if (jugador.posX < tablero[0].length - 1 && jugador.posY > 0) { jugador.posX++; jugador.posY--; }
            break;
        case 'z': // Abajo izquierda
            if (jugador.posX > 0 && jugador.posY < tablero.length - 1) { jugador.posX--; jugador.posY++; }
            break;
        case 'c': // Abajo derecha
            if (jugador.posX < tablero[0].length - 1 && jugador.posY < tablero.length - 1) { jugador.posX++; jugador.posY++; }
            break;
    }
}

// Función para mover al alien
function moverAlien() {
    // Fase de patrullaje
    if (!juego.compuerta.activa) {
        alien.posY += alien.direccionY;

        // Si el alien llega a los bordes, cambia de dirección
        if (alien.posY <= 0 || alien.posY >= tablero.length - 1) {
            alien.direccionY *= -1;
        }
    }
    // Fase después de activar la compuerta
    else if (juego.compuerta.activa && !juego.salida.activa) {
        if (alien.posX < juego.compuerta.posX) alien.posX++;  // Se mueve hacia la compuerta
    }
    // Fase de persecución directa
    else if (juego.salida.activa) {
        if (alien.posX < jugador.posX) alien.posX++;
        else if (alien.posX > jugador.posX) alien.posX--;

        if (alien.posY < jugador.posY) alien.posY++;
        else if (alien.posY > jugador.posY) alien.posY--;
    }
}

// Función para comprobar la victoria o derrota
function comprobarEstado() {
    // Derrota: El alien atrapó al jugador
    if (alien.posX === jugador.posX && alien.posY === jugador.posY) {
        console.log("¡El alien te ha atrapado! Has perdido.");
        return true;
    }

    // Victoria: El jugador ha llegado a la salida
    if (jugador.posX === juego.salida.posX && jugador.posY === juego.salida.posY && juego.compuerta.activa) {
        if (juego.salida.turnos >= 5) {
            console.log("¡Felicidades! Has escapado con éxito.");
            return true;
        }
    }

    // Derrota por límite de turnos
    if (juego.salida.turnos >= 50) {
        console.log("¡Se acabaron los turnos! Has perdido.");
        return true;
    }

    return false;
}

// Función para activar la compuerta
function activarCompuerta() {
    if (jugador.posX === juego.compuerta.posX && jugador.posY === juego.compuerta.posY) {
        juego.compuerta.turnos++;
        if (juego.compuerta.turnos >= 3) {
            juego.compuerta.activa = true;
            console.log("¡La compuerta está activada!");
        }
    }
}

// Función para activar la salida
function activarSalida() {
    if (jugador.posX === juego.salida.posX && jugador.posY === juego.salida.posY) {
        juego.salida.turnos++;
        if (juego.salida.turnos >= 5) {
            juego.salida.activa = true;
            console.log("¡La salida está activa!");
        }
    }
}

// Función principal del juego
function main() {
    let turnos = 0;

    while (turnos < 50) {
        turnos++;

        // Dibujar el tablero
        dibujarTablero();

        // Preguntar al jugador por su movimiento
        let movimiento = leer("¿A dónde te moverás? (w/a/s/d): ").toLowerCase();
        moverJugador(movimiento);

        // Mover al alien
        moverAlien();

        // Comprobar si el jugador activó la compuerta
        activarCompuerta();

        // Comprobar si el jugador activó la salida
        activarSalida();

        // Comprobar el estado del juego (victoria o derrota)
        if (comprobarEstado()) break;
    }

    // Mensaje final
    if (turnos === 50) {
        console.log("¡Se acabaron los turnos! Has perdido.");
    }
}

main();

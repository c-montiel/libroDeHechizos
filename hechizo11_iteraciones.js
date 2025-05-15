const leer = require('prompt-sync')();

const CANT_TURNOS = 5;
const VIDA_DEMENTOR_DEF = 1000;
const VIDA_APRENDIZ_DEF = 350;
const DANIO_DEMENTOR = 75;
const DANIO_APRENDIZ = 267;
const HECHIZO_01 = "Patronus";
const HECHIZO_02 = "Especto Patronus";

function main() {
    let vidaDementor = VIDA_DEMENTOR_DEF;
    let vidaAprendiz = VIDA_APRENDIZ_DEF;
    let hechizoLanzado = "solo silencio...";
    let azar = "";

    console.log("\n\n*** Inicio de Simulación ***\n");

    for (let i = 0; i < CANT_TURNOS; i++) {
        console.log("\nIntentos restantes: ", (CANT_TURNOS - i));
        console.log("\nEstudiante: ", vidaAprendiz, "\t/ Dementor: ", vidaDementor);
        console.log("\nLanza el Hechizo!:");
        hechizoLanzado = leer();

        if (hechizoLanzado === HECHIZO_01) {
            vidaDementor = (vidaDementor - DANIO_APRENDIZ)
        } else if (i % 2) {
            azar = getRandomInt(100)
            //            console.log(azar);
            if (azar <= 5) {
                vidaAprendiz = (vidaAprendiz - DANIO_DEMENTOR * 2);
            } else {
                vidaAprendiz = (vidaAprendiz - DANIO_DEMENTOR);
            }
        } else {
            vidaAprendiz = (vidaAprendiz - DANIO_DEMENTOR);
        };

        if (hechizoLanzado === HECHIZO_02) {
            azar = getRandomInt(10)
            //            console.log(azar);
            if (azar <= 7) {
                vidaDementor = (vidaDementor - (DANIO_APRENDIZ * 2))
            } else if (i % 2) {
                azar = getRandomInt(100)
                //            console.log(azar);
                if (azar <= 5) {
                    vidaAprendiz = (vidaAprendiz - DANIO_DEMENTOR * 2);
                } else {
                    vidaAprendiz = (vidaAprendiz - DANIO_DEMENTOR);
                }
            } else {
                vidaAprendiz = (vidaAprendiz - DANIO_DEMENTOR);
            };

            if (vidaDementor < DANIO_APRENDIZ || vidaAprendiz < DANIO_DEMENTOR) {
                i = CANT_TURNOS - 1;
            } else {
                console.log("lanza de nuevo!: ");
            };

            if (vidaDementor < DANIO_APRENDIZ) {
                console.log("\nLo lograste! Espantaste al Dementor!");
            };

            if (vidaAprendiz < DANIO_DEMENTOR && CANT_TURNOS - 1) {
                console.log("\nFuiste Derrotado!");
            };

            console.log("\n\n*** Fin de Simulación ***\n");
        };
    };
};

main();

/**
 * funcion getrandomint usada para generar numero aleatorio
 *
 * @param {*} max
 * @return {*} 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};


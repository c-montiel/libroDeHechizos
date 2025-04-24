const leer = require('prompt-sync')();

const POCION_01 = "FELIX FELICIS";
const POCION_02 = "POLVO DE FLU";
const POCION_03 = "POCION MULTIJUGOS";

const DEFINICION_01 = "Es extremadamente compleja y peligrosa.";
const DEFINICION02 = "Es compleja pero útil en la red de transportación.";
const DEFINICION03 = "Es complicada pero muy útil para transformaciones temporales.";
const DEFINICION_NULA = "No tenemos información sobre esa poción en nuestros registros.";

function main () {
    let pocionConsultada = "sin consulta";

    console.log("ingresa la pocion por la quieres consultar");
    pocionConsultada = leer().toUpperCase();

    switch (pocionConsultada) {
        case POCION_01:
            console.log("\n\n*** Info de pocion " + POCION_01 + " ***\n");
            console.log(DEFINICION_01);
            console.log("\n*** Fin del informe ***");
            break;
        case POCION_02:
            console.log("\n\n*** Info de pocion " + POCION_02 + " ***\n");
            console.log(DEFINICION02);
            console.log("\n*** Fin del informe ***");
            break;
        case POCION_03:
            console.log("\n\n*** Info de pocion " + POCION_03 + " ***\n");
            console.log(DEFINICION03);
            console.log("\n*** Fin del informe ***");
            break;

        default:
            console.log("\n\n*** Info de pocion " + pocionConsultada + " ***\n");
            console.log(DEFINICION_NULA);
            console.log("\n*** Fin del informe ***");
            break;
    }
};

main();
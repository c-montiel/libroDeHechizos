const leer = require('prompt-sync')();

const CANT_INTENTOS = 3;

const HECHIZO_01 = "WINGARDIUM LEVIOSA";
const HECHIZO_02 = "EXPECTO PATRONUM"; 
const HECHIZO_03 = "OBLIVIATE";
const HECHIZO_04 = "EXPELLIARMUS";
const HECHIZO_05 = "AVADA KEDAVRA";

function main() {
    let hechizoIngresado = "sin seleccion";
    console.log("Bienvenido a la clase de encantamientos\nComo estudiante debes demostrar tu habilidad para recordar y lanzar los hechizos correctamente.\nO habrá consecuencias! ");

    console.log("\n*** Iniciar simulacion ***\n");

    for (let i = 0; i < CANT_INTENTOS; i++) {
        console.log("Elige bien tus palabras...\nLanza tu hechizo!: \n");
        hechizoIngresado = leer().toUpperCase();
        
        if (hechizoIngresado == HECHIZO_01||hechizoIngresado == HECHIZO_02||hechizoIngresado == HECHIZO_03||hechizoIngresado == HECHIZO_04||hechizoIngresado == HECHIZO_05) {
            console.log("Correcto! Gran Hechizo!");
            i = CANT_INTENTOS;            
        } else if (i === CANT_INTENTOS-1) {
            console.log("\nFallaste!\nEres una decepciòn");
        } else {
            console.log("\nIncorrecto!\nVuelve a intentar!: ");
        }
        console.log(hechizoIngresado,"\nIntentos restantes: ",CANT_INTENTOS - i);
        console.log("\n*** Fin simulacion ***\n");
    }
};

main();

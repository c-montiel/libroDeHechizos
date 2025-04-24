const leer = require('prompt-sync')();

const HIERBA_APTA_01 = "MANDRAGORA";
const HIERBA_APTA_02 = "VALERIANA";
const HIERBA_PELIGROSA_01 = "BUBOTUBER";
const HIERBA_PELIGROSA_02 = "WHOMPING WILLOW"

const AUTORIZACION = "Buen ejemplar, toma asiento para iniciar el examen!";
const ADVERTENCIA = "No es posible iniciar el examen con esta planta peligrosa!";
const RECOMENDACION = "Equivocarse es algo comun cuando inicias, algunas hierbas se asemejan, es importante que puedas diferenciarlas para evitar accidentes"

function main () {
    let hierbaIdentificada = "hierba no hay";
    console.log("ingresa el nombre de la hierba que conseguiste: ");
    hierbaIdentificada = leer().toUpperCase();
    
    if (hierbaIdentificada == HIERBA_APTA_01 || hierbaIdentificada == HIERBA_APTA_02) {
        console.log("\n\n*** Revisión de planta adquirida ***\n");
        console.log("Hierba presentada: " + hierbaIdentificada);
        console.log("\n" + AUTORIZACION);
    } else if (hierbaIdentificada == HIERBA_PELIGROSA_01 || hierbaIdentificada == HIERBA_PELIGROSA_02){
        console.log("\n\n*** Revisión de planta adquirida ***\n");
        console.log("Hierba presentada: " + hierbaIdentificada);
        console.log("\n" + ADVERTENCIA);
    } else {
        console.log("\n\n*** Revisión de planta adquirida ***\n");
        console.log("Hierba presentada: " + hierbaIdentificada);
        console.log("\n" + RECOMENDACION);
    }
    
};

main();
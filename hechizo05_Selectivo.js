const leer = require('prompt-sync')();

const CASA_01 = "Gryffindor";
const CASA_02 = "Hufflepuff";
const CASA_03 = "Ravenclaw";
const CASA_04 = "Slythering";

const PUNTAJE_INGRESO_CASA01 = 90;
const PUNTAJE_INGRESO_CASA02 = 70;
const PUNTAJE_INGRESO_CASA03 = 50;

const SALUDO_INGRESO_CASA01 = "Bienvenido, valiente " + CASA_01 + ". Tu coraje es tu mayor fuerza. Enfrenta cada desafío con valentía, como lo haría Godric Gryffindor."
const SALUDO_INGRESO_CASA02 = "Bienvenido, leal " + CASA_02 + ". La lealtad y la honestidad te guiarán."
const SALUDO_INGRESO_CASA03 = "Bienvenido, curioso " + CASA_03 + ". La curiosidad y creatividad te guiarán."
const SALUDO_INGRESO_CASA04 = "Bienvenido, astuto " + CASA_04 + ". La ambición y la astucia te guiarán. Como decía Salazar Slytherin, 'La grandeza está al alcance de los audaces.'"

function main () {
    let puntuacionExamen = -1;

    console.log("ingresa el resultado de tu examen de ingreso: ");
    puntuacionExamen = Number(leer());

    if (puntuacionExamen >= PUNTAJE_INGRESO_CASA01) {
        console.log("\n\n*** Casa asignada ***\n");
        console.log("resultado de examen : " + puntuacionExamen + "\n" + SALUDO_INGRESO_CASA01);    
        
    } else if (puntuacionExamen < PUNTAJE_INGRESO_CASA01 && puntuacionExamen >= PUNTAJE_INGRESO_CASA02) {
        console.log("\n\n*** Casa asignada ***\n");
        console.log("resultado de examen : " + puntuacionExamen + "\n" + SALUDO_INGRESO_CASA02);   
        
    } else if (puntuacionExamen < PUNTAJE_INGRESO_CASA02 && puntuacionExamen >= PUNTAJE_INGRESO_CASA03) {
        console.log("\n\n*** Casa asignada ***\n");
        console.log("resultado de examen : " + puntuacionExamen + "\n" + SALUDO_INGRESO_CASA03);  
    } else {
        console.log("\n\n*** Casa asignada ***\n");
        console.log("resultado de examen : " + puntuacionExamen + "\n" + SALUDO_INGRESO_CASA04);  
    };
};

main();
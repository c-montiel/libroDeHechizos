const leer = require("prompt-sync")();

const EDAD_MINIMA = 11;

function main() {
    let edadActual = 0;
    let añosDiferencia = 99;
    
    console.log("ingrese su edad actual: ");
    edadActual = Number(leer());

    if(edadActual >= EDAD_MINIMA) {
        console.log("\n\n*** VERIFICACION DE COMPRA ***\n");
        console.log("Edad: "+ edadActual + " años");
        console.log("Busquemos una varita! Alguna te puede estar esperando desde hace tiempo!")
}   else {
        añosDiferencia = (EDAD_MINIMA - edadActual);
        
        console.log("\n\n*** VERIFICACION DE COMPRA ***\n");
        console.log("Edad: "+ edadActual);
        console.log("\nVolvé en " + añosDiferencia + " años!");
        console.log("Solo a partir de los "+ EDAD_MINIMA + " podes comprar una varita");
}
};

main();
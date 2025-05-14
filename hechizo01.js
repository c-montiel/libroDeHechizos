const leer = require("prompt-sync")();

/**
 * Calcula el total de ingredientes necesarios para un hechizo.
 * 
 * Muestra un mensaje de bienvenida, solicita la cantidad de Escarabajos de Ojos de Tigre y de Raíces de Mandrágora 
 * necesarias para el hechizo y muestra un resumen de la cantidad total de ingredientes
 * 
 * @returns {void} No devuelve nada.
 */
function main() {
    // variables definidas e inicializadas
    let cantidadEscarabajos = 0;
    let cantidadMandragora = 0;
    let totalIngredientes = 0;

    // mensaje de bienvenida
    console.log("Bienvenido, aprendiz! vamos a calcular cuantos ingredientes necesitas para tu hechizo.");

    console.log("ingresa la cantidad necesaria de Escarabajos de Ojos de Tigre: ");
    cantidadEscarabajos = Number(leer());

    console.log("ingresa la cantidad necesaria de Raíces de Mandrágora: ");
    cantidadMandragora = Number(leer());

    totalIngredientes = (cantidadEscarabajos + cantidadMandragora);

    // mensaje de salida
    console.log("\n\n#### Resumen de ingredientes ####\n");
    console.log("Escarabajos de Ojos de Tigre: " + cantidadEscarabajos);
    console.log("Raíces de Mandrágora: " + cantidadMandragora);
    console.log("Total de ingredientes: " + totalIngredientes);
    console.log("\n##################################")
}

main();

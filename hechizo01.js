const leer = require("prompt-sync")();
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
    
    totalIngredientes = cantidadEscarabajos + cantidadMandragora;

    // mensaje de salida
    console.log("#### Resumen de ingredientes ####\n");
    console.log("Escarabajos de Ojos de Tigre: " + cantidadEscarabajos);
    console.log("Raíces de Mandrágora: " + cantidadMandragora);
    console.log("Total de ingredientes: " + totalIngredientes);
    
    
}

main();
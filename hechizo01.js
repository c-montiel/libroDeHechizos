const leer = require("prompt-sync")();
function main() {
    // variables definidas e inicializadas
    let ojosDeTigre = 0;
    let mandrágora = 0;
    let totalIngredientes = 0;

    // mensaje de bienvenida
    console.log("Bienvenido, aprendiz! vamos a calcular cuantos ingredientes necesitas para tu hechizo.");

    console.log("ingresa la cantidad necesaria de Escarabajos de Ojos de Tigre: ");
    ojosDeTigre = Number(leer());

    console.log("ingresa la cantidad necesaria de Raíces de Mandrágora: ");
    mandrágora = Number(leer());
    
    totalIngredientes = ojosDeTigre + mandrágora;

    // mensaje de salida
    console.log("#### Resumen de ingredientes ####"+"\n");
    console.log("Escarabajos de Ojos de Tigre: " + ojosDeTigre);
    console.log("Raíces de Mandrágora: " + mandrágora);
    console.log("Total de ingredientes: " + totalIngredientes);
    
    
}

main();
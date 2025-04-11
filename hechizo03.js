const leer = require("prompt-sync")();


function main() {
    // variables definidas e inicializadas
    let ingredientePrincipal = 0;
    let tiempoPreparacion = 0;
    let aptoConsumo = false;
    let ingredienteOK = false;
    let tiempoOK = false;

    //solicitar datos al usuario
    console.log("Bienvenido Aprendiz! Vamos comprobar que su pocion es apta para el consumo.");
    
    console.log("ingresa la cantidad de gramos del ingrediente principal: ");
    ingredientePrincipal = Number(leer());

    console.log("ingresa el tiempo de preparacion en horas, sin minutos: ");
    tiempoPreparacion = Number(leer());

    // comprobar si la es apta
    ingredienteOK = ingredientePrincipal >= 5 && ingredientePrincipal <= 10;
    tiempoOK = tiempoPreparacion == 3;
    aptoConsumo = ingredienteOK && tiempoOK;

    
    console.log("#### Resumen de preparación ####"+"\n");
    console.log("cantidad dentro del rango: " + ingredienteOK);
    console.log("tiempo de preparación exacto: " + tiempoOK);
    console.log("Apto para el consumo: " + aptoConsumo);

}

main();
const leer = require("prompt-sync")();

const MIN_GR_INGREDIENTE = 5;
const MAX_GR_INGREDIENTE = 10;
const TIEMPO_EMPLEADO = 3;

/**
 * Comprueba si una poción es apta para el consumo.
 * 
 * Solicita al usuario la cantidad de gramos del ingrediente principal y el tiempo de 
 * preparación en horas. Verifica que la cantidad del ingrediente principal esté entre 
 * 5 y 10 gramos y que el tiempo de preparación sea exactamente de 3 horas. Muestra un 
 * resumen indicando si la poción es apta para el consumo basándose en estos criterios.
 * 
 * @returns {void} No devuelve nada.
 */
function main() {
    // variables definidas e inicializadas
    let gramosIngredientePpal = 0;
    let tiempoPreparacion = 0;
    let aptoConsumo = false;
    let gramosCorrectos = false;
    let tiempoCorrecto = false;

    //solicitar datos al usuario
    console.log("Bienvenido Aprendiz! Vamos comprobar que su pocion es apta para el consumo.");
    console.log("ingresa la cantidad de gramos del ingrediente principal: ");
    gramosIngredientePpal = Number(leer());

    console.log("ingresa el tiempo de preparacion en horas, sin minutos: ");
    tiempoPreparacion = Number(leer());

    // comprobar si la es apta
    gramosCorrectos = ((gramosIngredientePpal >= MIN_GR_INGREDIENTE) && (gramosIngredientePpal <= MAX_GR_INGREDIENTE));
    tiempoCorrecto = (tiempoPreparacion == TIEMPO_EMPLEADO());
    aptoConsumo = (gramosCorrectos && tiempoCorrecto);

    // resumen 
    console.log("\n\n##### Resumen de preparación #####"+"\n");
    console.log("cantidad dentro del rango: " + gramosCorrectos);
    console.log("tiempo de preparación exacto: " + tiempoCorrecto);
    console.log("Apto para el consumo: " + aptoConsumo);
    console.log("\n##################################");
}

main();

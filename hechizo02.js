const leer = require("prompt-sync")();

const MULTIPLICADOR_VARITAS = 3;
const MULTIPLICADOR_LIBROS = 2;

/**
 * Calcula el total de materiales necesarios para una clase de hechizos.
 * @param {number} cantVaritas - Cantidad de varitas que se necesitan.
 * @param {number} cantidadLibros - Cantidad de libros que se necesitan.
 * @returns {number} El total de materiales necesarios.
 */
function calculoMateriales (cantVaritas,cantidadLibros) {
    return ((cantVaritas*MULTIPLICADOR_VARITAS) + (cantidadLibros*MULTIPLICADOR_LIBROS));
}

/**
 * Calcula y muestra el total de materiales necesarios para una clase de hechizos.
 * 
 * Solicita al usuario el número de estudiantes, la cantidad de estudiantes con varita,
 * y la cantidad de libros necesarios. Luego calcula el total de materiales usando la
 * función `calculoMateriales` y muestra un resumen de los materiales.
 * 
 * @returns {void} No devuelve nada.
 */
function main(){
    // variables definidas e inicializadas
    let cantidadEstudiantes = 0;
    let cantidadVaritas = 0;
    let cantidadLibros = 0;
    let totalMateriales = 0;

    // pedir datos al usuario
    console.log("Bienvenido! vamos a calcular la cantidad de materiales necesarios para esta clase");
    console.log("ingrese la cantidad de estudiantes: ");
    cantidadEstudiantes = Number(leer());
    console.log("ingrese la cantidad de estudiantes con varita: ");
    cantidadVaritas = Number(leer());
    console.log("ingrese la cantidad de libros: ");
    cantidadLibros = Number(leer());
    
    // calcular total de materiales con funcion piola
    totalMateriales = calculoMateriales(cantidadVaritas, cantidadLibros);

    console.log("\n\n#### Resumen de materiales ####\n");
    console.log("Estudiantes: " + cantidadEstudiantes);
    console.log("Estudiantes con varita: " + cantidadVaritas);
    console.log("Cantidad de libros: " + cantidadLibros+"\n");
    console.log("Total de materiales: " + totalMateriales);
    console.log("\n################################");
};

main();

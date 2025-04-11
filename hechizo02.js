const leer = require("prompt-sync")();

const TOTAL_MATERIALES = function (varitas,libros ) {
    return varitas*3 + libros*2;
}

function main(){
    // variables definidas e inicializadas
    let cantidadEstudiantes = 0;
    let EstudiantesConVarita = 0;
    let cantidadLibros = 0;
    let totalMateriales = 0;
    
    // pedir datos al usuario
    console.log("ingrese la cantidad de estudiantes: ");
    cantidadEstudiantes = Number(leer());
    console.log("ingrese la cantidad de estudiantes con varita: ");
    EstudiantesConVarita = Number(leer());
    console.log("ingrese la cantidad de libros: ");
    cantidadLibros = Number(leer());

    // calcular total de materiales
    //totalMateriales= ((EstudiantesConVarita*3) + (cantidadLibros*2));
    
    // calcular total de materiales con funcion piola
    totalMateriales = TOTAL_MATERIALES(EstudiantesConVarita, cantidadLibros);


    console.log("#### Resumen de materiales ####"+"\n");
    console.log("Estudiantes: " + cantidadEstudiantes);
    console.log("Estudiantes con varita: " + EstudiantesConVarita);
    console.log("Cantidad de libros: " + cantidadLibros+"\n");
    console.log("Total de materiales: " + totalMateriales);
    
};

main();
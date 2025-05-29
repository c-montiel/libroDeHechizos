const leer = require('prompt-sync')();

const diasMenu = ["L", "M", "Mi", "J", "V", "S", "D"];
const diasYTareas = [
    ["L", "lunes", "lavar la ropa", "pasear el perro"],
    ["M", "martes", "sin tarea"],
    ["Mi", "miercoles", "ordenar cuarto"],
    ["J", "jueves", "sin tarea"],
    ["V", "viernes", "sin tarea"],
    ["S", "sabado", "practicar programacion"],
    ["D", "domingo", "sin tarea"]
];


function main() {
    let seleccionDia = "osvaldo";
    let indice = "";
    let tareasDia = "";
    let dia = "";
    let tareas = "";
    let contador = 0;

    console.log("Ingrese la inicial del dia para revisar las tareas: " + diasMenu);
    seleccionDia = leer()

    indice = diasMenu.indexOf(seleccionDia)
    tareasDia = diasYTareas[indice].length - 2;
    console.log(dia);

    dia = diasYTareas[diasMenu.indexOf(seleccionDia)][1]; // lunes
    tareas = diasYTareas[indice].splice(2);

    console.log("*** Mostrando " + tareasDia + " tareas del día " + dia + " ***");

    for (let i = 0; i < diasYTareas[indice].length; i++) {
        contador++
        console.log("tarea nº ", contador, " ", tareas[i]);
    };

    console.log("*** fin de tareas ***");

};

main();

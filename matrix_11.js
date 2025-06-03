const leer = require('prompt-sync')();

const diasMenu = ["L", "M", "Mi", "J", "V", "S", "D"];
const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const tareasPendientes = ["lavar la ropa", "ordenar el cuarto", "practicar programacion", "regar las plantas"];
const tareasDiarias = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

function main() {
    let diaSeleccionado = "";
    let indice = "";
    let cantidadTareas = 0;

    console.log("selecciones el día para agregar tareas: " + diasMenu); //muestra las iniciales de los dias de la semana
    diaSeleccionado = leer();
    indice = diasMenu.indexOf(diaSeleccionado); // devuelve un numero de indice
    console.log("seleccionaste: " + diasSemana[indice]); // devuelve un dia de semana en la ubicacion seleccionada 
    console.log("cuantas tareas deseas agregar al dia " + diasSemana[indice] + "?");
    cantidadTareas = Number(leer());

    console.log("\n***agregando " + cantidadTareas + " al día " + diasSemana[indice] + ". ***");

    for (let i = 0; i < cantidadTareas; i++) {
        tareasDiarias[indice].push(tareasPendientes[i]);
        console.log(tareasDiarias[indice][i]);
    };
    console.log("\n*** tareas agregadas ***");
    console.log(tareasDiarias);
};

main();



const leer = require('prompt-sync')();

const diasMenu = ["l", "m", "mi", "j", "v", "s", "d"];
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const tareas = [
    [{
        titulo: "lavar ropa",
        fecha: "02/03/2025",
        estado: "terminada"
    }],
    [],
    [{
        titulo: "ordenar",
        fecha: "04/03/2025",
        estado: "pendiente"
    }],
    [],
    [],
    [{
        titulo: "practicar programacion",
        fecha: "05/03/2025",
        estado: "pendiente"
    }],
    []
]

function main() {
    let diaSeleccionado = "";
    let indice = "";
    let dia = "";
    let tarea = "";

    console.log("ingrese la inicial del dia a comprobar: " + diasMenu);
    diaSeleccionado = leer();
    indice = diasMenu.indexOf(diaSeleccionado);
    dia = dias[indice];
    tarea = tareas[indice][indice];

    console.log(tarea);


    console.log("*** mostrando la tarea del dia " + dia);
    console.log("Tarea: ");
    console.log("- " + tarea.titulo);
    console.log("- " + tarea.fecha);
    console.log("- " + tarea.estado);
    console.log("*** fin de tareas ***");
};

main();

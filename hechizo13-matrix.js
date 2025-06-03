const leer = require('prompt-sync')();

const listAlumnos = ["Draco", "Harry", "Luna"];
const listAsistencia = [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0]
];


function main() {
    let AlumnoSeleccionnado = "";

    console.log("*** Revision de asistencia ***");
    console.log("\nConsulta asistencia en Hogwarts");
    console.log("Ingresa el nombre del alumno (Draco, Harry, Luna): ");
    AlumnoSeleccionnado = leer();

    console.log("*** Fin de revision ***");
};
main();

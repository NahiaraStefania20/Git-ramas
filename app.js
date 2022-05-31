const process = require("process");
const {leerArchivo, guardarTarea, crearTarea} = require("./funcionesDeTareas");
const tareas = leerArchivo();
const accion = process.argv[2];
const titulo = process.argv[3];

switch(accion) {
    case "listar":
        tareas.forEach((tarea, i) => {
            console.log(`(${i + 1}) ${tarea.titulo} -> ${tarea.estado}`)
        });
        break;
    case "crear":
        let nuevaTarea = new crearTarea(titulo.trim())
        guardarTarea(nuevaTarea)
        break;
    case "filtrar":
        


        case undefined:
            console.log("Atención - Tienes que pasar una acción");
        break;
    default:
            console.log("No entiendo qué querés hacer.");
        break;
}

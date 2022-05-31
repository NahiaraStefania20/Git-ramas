const fs = require("fs");


    const leerArchivo = function() {
        let tareas = fs.readFileSync("./tareas.json","utf-8");
        return JSON.parse(tareas)
    };

    const escribirJSON = function(tareas) {
        let tareasStringify = JSON.Stringify(tareas,null,3);
        fs.writeFileSync(this.archivo,tareasStringify,'utf-8');
    };

    const crearTarea = function(titulo){
        this.titulo = titulo;
        this.estado = "pendiente"
    };

    const guardarTarea = function(tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        escribirJSON(tareas);
    };

    const leerPorEstado = function (estado) {
        let tareas = leerArchivo();
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
        return tareasFiltradas;
    };

    const filtrarPorEstado = function (estado) {
        let tareas = leerArchivo();
    };

   
module.exports = {
    leerArchivo,
    escribirJSON,
    crearTarea,
    guardarTarea
};
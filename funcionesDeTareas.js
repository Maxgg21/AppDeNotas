const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(arrayDeTareas) {
        //1--Convertir el array recibido como parámetro a un string en formato JSON
        let data = JSON.stringify(arrayDeTareas, null, 2);
        fs.writeFileSync('./tareas.json', data, {encoding: 'utf-8'});
    },
    guardarTarea: function (tarea) {
        //2--vamos a crear otra función llamada guardarTarea.
        //A-Obtener array del archivo tareas.json 
        let listaDeTarea = this.leerArchivo();
        //B-Agregar la tarea nueva al array 
        listaDeTarea.push(tarea);
        //C--Agregar la tarea nueva al array que obtuvimos en el punto anterior. 
        this.escribirJSON(listaDeTarea);
    },
    filtrarPorEstado: function(estado){
        //obtener array del archivo tareas.json
        let tareas = this.leerArchivo();
        // luego Filtrar 
        let tareaFiltrada = tareas.filter((tarea) => tarea.estado === estado)
        return tareaFiltrada;
    }
}
module.exports = archivoTareas;
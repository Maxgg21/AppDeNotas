let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2].toLowerCase();

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, i) => console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`))
        break
    case 'crear':
        //Crear un nuevo case que al identificar la acción “crear” y una nueva tarea, ejecute las funciones “escribirJSON” y “guardarTarea”.
        let titulo = process.argv[3];
        // Validacion de entrada de dato
        if(typeof titulo === 'undefined'){
            console.log('Debes pasar una tarea para crearla');
            return;
        }
        //crearemos una variable de tipo objeto literal con dos atributos título y estado. El titulo sera ingresado por process y estado por defecto  seria en proceso
        let tarea = {
            titulo,
            estado : 'pendiente'
        };
        // Se hace uso de la funcionalidad del modulo FuncionDeTareas
        archivoTareas.guardarTarea(tarea);
        break;
    case 'filtrar':
        let estado = process.argv[3];
        // Validacion de entrada de estado
        if(typeof estado === 'undefined'){
            console.log('Debes parar un estado para buscar');
            return;
        }
        // El resultado de la busqueda mediante el modulo de funcionDeTareas
        let tareasFiltrada = archivoTareas.filtrarPorEstado(estado)
        console.log('Las tarea pendiente es');
        console.log();    
        console.log('-----------------------');
        //Mostrar por consola la busqueda
        tareasFiltrada.forEach((estado, i) => {
            console.log(`${i+1}. ${estado.titulo}`);
        })
        console.log();    
        break;
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;
    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}

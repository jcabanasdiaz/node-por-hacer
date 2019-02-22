const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const oCrearOptions = {
    descripcion
}

const oActualizarOptions = {
    descripcion,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const oBorrarOptions = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', oCrearOptions)
    .command('actualizar', 'Actualiza el estado completado de una tarea', oActualizarOptions)
    .command('borrar', 'Borra una tarea del listado', oBorrarOptions)
    .help()
    .argv;

module.exports = {
    argv
}
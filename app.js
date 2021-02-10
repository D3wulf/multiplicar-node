//como hemos creado el archivo config con los comandos, los añadimos
// no olvidar añadir la propiedad del argv

const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./configs/yargs');
require('colors');

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
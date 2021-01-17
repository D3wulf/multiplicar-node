//como hemos creado el archivo config con los comandos, los añadimos
const argv = require('./configs/yargs').argv; // no olvidar añadir la propiedad del argv

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`.rainbow))
            .catch(e => console.log(e));
        break;

    default:
        console.log("comando no reconocido");



}

console.log(argv);
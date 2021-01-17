const argv = require('yargs')

.command('listar', 'Aqui se imprime una tabla', {

        base: {

            demand: true,
            alias: "b" // <----- esto hara que en vez de base usemos el alias
        },
        limite: {

            alias: 'l',
            default: 10
        }

    })
    .command('crear', 'Aqui se crea una tabla de multiplicar', {

        base: {

            demand: true,
            alias: "b" // <----- esto hara que en vez de base usemos el alias
        },
        limite: {

            alias: 'l',
            default: 10
        }

    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// el _[] es porque al poner en consola node app [comando que sea] --base 5 nos crea un array que empieza con _[]
// es importante el console.log(argv) para ver los parametros que salen, objetos, arrays...
let comando = argv._[0];

switch (comando) {

    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log("comando no reconocido");



}

console.log(argv);
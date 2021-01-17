//uso de yargs para la mejora del uso de parametros desde la terminal
//añadimos el paquete
const argv = require('yargs')
    //.comand creara un comando como el del laravel
    // lo primero sera el nombre, lo segundo seria la info que nos sale al ejecutar 
    // listar  y luego
    //un objeto donde pondremos los datos que se pueden recibir
    .command('listar', 'Aqui se imprime una tabla', {
        // esto seria el --base
        base: {
            //obligatorio=true
            demand: true,
            alias: "b" // <----- esto hara que en vez de base usemos el alias
        },
        limite: {
            // le ponemos un limite a los datos a mostrar y dejaremos que el maximo sea 10 y el alias sera -l
            alias: 'l',
            default: 10
        }

    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv;

//Despues de hacer el command, usamos el argv base para que siempre sepa que --base o -b va a ser el numero que le pongamos

console.log(argv.base);
//console.log(argv2);


/*let argv = process.argv;
let parametro = argv[2];
base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/
//requires
//const multiplicar = require('./multiplicar/multiplicar');

//hacemos una destructuracion para hacerlo más simple y coger exactamente lo que necesitamos del objeto

const { crearArchivo } = require('./multiplicar/multiplicar');



//let base = 4;


//tras recibir la funcion (promise) usamos el then en este archivo
/*crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/


//añadir datos desde terminal, en este caso queremos mandar la base desde terminal
//usaremos el argv que son argumentos del proceso

/**el proceso.argv nos devuelve un array de los procesos que nos devolveran
 * la ubicacion del node y del archivo, esto corresponde a un array de posiciones
 * el cual recorremos segun su posicion. Si en terminal pongo node app.js --base=5
 * nos coloca en la posicion [2] el parametro que enviamos */
let argv = process.argv;
let parametro = argv[2];

// usamos split para convertir de un string a un array y seleccionamos una posicion
base = parametro.split('=')[1];
// esto nos separará base=5 en base por un lado y 5 por el otro

crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));

// y con esto ya enviamos datos desde la terminal para hacer pruebas.
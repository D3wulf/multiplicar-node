const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
        }

        if (listar) {
            console.log('=============================='.green);
            console.log('       Tabla del : ', colors.blue(base));
            console.log('=============================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}
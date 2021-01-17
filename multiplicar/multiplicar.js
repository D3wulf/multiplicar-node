//requires
const { Console } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log('==============================='.red)
        console.log(`tabla de ${base}`.yellow)
        console.log('==============================='.red)


        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`.rainbow);

        }



    });




}

let crearArchivo = (base, limite = 10) => {

        return new Promise((resolve, reject) => {
            let data = "";

            if (!Number(base)) {
                reject(`${base} no es un número`);
                return;
            }
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;

            }
            fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
                if (err) reject(err);
                else resolve(`tabla-${base}`);


            });
        });
    }
    //exportamos el archivo module.exports es un objeto
module.exports = {

    crearArchivo,
    listarTabla


}
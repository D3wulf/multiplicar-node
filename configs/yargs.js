const opts = {
    base: {

        demand: true,
        alias: "b"
    },
    limite: {

        alias: 'l',
        default: 10
    }

}
const argv = require('yargs')

.command('listar', 'Aqui se imprime una tabla', opts)

.command('crear', 'Aqui se crea una tabla de multiplicar', opts)

.help()
    .argv;

module.exports = {

    argv
}
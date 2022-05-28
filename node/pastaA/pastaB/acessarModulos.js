const moduloA = require('../../moduloA')
const saudacao = require('saudacao')
console.log(moduloA.ola);
console.log(saudacao.ola);

const ola2 = require('./pastaC') // Ou somente require('./pastaC/index')

console.log(ola2);
const http = require('http')
http.createServer((req,res) => {
    res.write('Bom Dia, ')
    res.end()
}).listen(8080)
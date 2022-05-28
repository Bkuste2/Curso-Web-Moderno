let a = 1
// console.log(a);

let p = new Promise(function(acept,reject) {
    // acept({x: 3, y: 4})
    // acept('OLA MUNDO')
    // acept(5)
    acept(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const primeiraLetraMinuscula = primeiraLetra => primeiraLetra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(primeiraLetraMinuscula)
    .then(console.log)
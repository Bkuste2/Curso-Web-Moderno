const pessoa = {
    nome: 'Rebeca',
    idade:2,
    peso: 13
}
console.log(Object.keys(pessoa), Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => { 
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // Será lida? Se está = false, ela pode ser acessada porém não será lida quando não especificada
    writable: false, // Pode ser ('escrita'/alterada)
    value: '01/01/2019' 
})

console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
console.log(pessoa);


// Object.assign ES15;
// Gera um objeto que concatena os Objetos e sobrescreverá caso atributo já exista
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // "a" Foi sobrescrito
const objDestiny = Object.assign(dest, o1, o2) 
console.log(objDestiny);

Object.freeze(objDestiny)
objDestiny.c = 1234
console.log(objDestiny);
     
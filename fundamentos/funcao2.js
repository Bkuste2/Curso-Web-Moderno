// Armazenando uma função em uma variável
const imprimirSoma = function (a , b) {
    console.log(a + b);
}
imprimirSoma(2,3)

// Armazenando uma Arrow Function em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(7,5));

// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(0,9));

const imprimir2 = a => console.log(a)

imprimir2('legal')

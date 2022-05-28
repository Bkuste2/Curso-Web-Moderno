// Função sem retorno

function imprimirSoma(a,b) {
    console.log(a + b);
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 3) // Pega Somente a quantidade necessária para os parâmetros
imprimirSoma()

// Função com retorno

function soma(a, b=1) { // Número Padrão caso não sejam passados os parâmetros
    return a + b
}

console.log(soma(7, 3));
console.log(soma(2));
console.log(soma());
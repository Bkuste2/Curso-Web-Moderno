console.log(soma(3,4));
// console.log(subtracao(3,4));  /// quando a função é armazenada em uma variável ou constante ela n pode ser chamada antes de ser declarada, diferente da função declarada 

// Function Declaration 
function soma(x,y) {
    return x + y
}

// Function Expression
const subtracao =  (x,y) => {
    return x - y
}
console.log(subtracao(3,4))

// Named Function Expression   /// Pouco usada, mais usada para debugar o código
const multiplicacao = function mult(x,y) {
    return x * y
}
console.log(multiplicacao(3,4))

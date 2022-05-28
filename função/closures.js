// Clousure é o escopo criado quando uma função é declarada
// Ele permite a função acessar e manipular variáveis externas a função

// CONTEXTO LÉXICO EM AÇÃO 
const x  = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao());
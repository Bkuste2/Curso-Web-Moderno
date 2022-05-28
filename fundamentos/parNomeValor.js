// Par nome/valor

const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente= {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco: {
        logradouro:'RUA DA BATATA',
        numero:123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
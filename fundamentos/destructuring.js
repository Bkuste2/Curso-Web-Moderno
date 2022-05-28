// Recurso ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero:1000
    }
}

console.log(pessoa.nome);


const { nome,idade} = pessoa
console.log(nome,idade)



// const { logradouro: log, numero: num } = pessoa.endereco
const { endereco: {logradouro: log, numero: num}} = pessoa
console.log(log,num);

// Para Não ficar undefined, pode-se deixar um valor fixo 
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);


/* Cuidar com a desestruturação de dados aninhados
* const { conta: {ag, num}} = pessoa
* console.log(ag,num);
*/
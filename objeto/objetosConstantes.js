// Pessoa => 123 => {...}
const pessoa = {nome: 'João'}
console.log(pessoa);
pessoa.nome = 'Pedro'
console.log(pessoa);

// Pessoa => 456 => {...}
// pessoa = {nome: 'Ana'}   Aqui você está dando um novo endereço na memória pois está criando um novo objeto, e não alterando o mesmo

Object.freeze(pessoa) // O freeze não deixa o objeto ser alterado tornando o objeto realmente constante
pessoa.nome = 'Maria' 
pessoa.end = 'RUA ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({name: 'Jhon'})
pessoaConstante.name = 'Marie'
console.log(pessoaConstante);
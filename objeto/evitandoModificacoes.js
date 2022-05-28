// Object.preventExtensions => Não deixa criar novos atributos, porém pode alterar os já existente
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
}) 
console.log(Object.isExtensible('Pode ser aumentado?' + produto));
console.log(produto);

delete produto.tag
console.log(produto);

produto.nome =  'Borracha'
produto.promocao = 0.35
console.log(produto);

// Object.seal => Não é possível adicionar e nem excluir elementos, porém é possivel alterar os já existentes

const pessoa = {
    nome: 'Juliana', idade: 35
}
Object.seal(pessoa)
console.log('Selado? ' + Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 40
console.log(pessoa)


/*
Object.freeze => O Object.freeze faz com que os elementos do objeto não possam ser alterados 
de maneira alguma, ou seja, sobrescritos, apagados ou adicionados
*/

Object.freeze(pessoa)
console.log(Object.isFrozen(pessoa));
pessoa.idade = 50
console.log(pessoa);
// Filter => Ele filtra com base no que você exigiu na função e retorna o que for igual a true


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
console.log(produtos.filter(p => {
    return p.fragil == false
}));

console.log(produtos.filter(p => {
    return p.preco < 2000
}));

const verificandoCaroEFragil = produto => produto.preco >= 500 && produto.fragil == true

console.log(produtos.filter(verificandoCaroEFragil));
console.log(produtos.filter(p => p.preco > 500).filter(p => p.fragil));
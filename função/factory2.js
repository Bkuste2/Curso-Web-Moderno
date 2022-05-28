const produtos = []

function criarProduto(nome,preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

const batata = criarProduto('Batata', 4)
produtos.push(batata)

const mamao = criarProduto('mamao', 5)
produtos.push(mamao)

const beterraba = criarProduto('beterraba', 2.5)
produtos.push(beterraba)


console.log(batata);

console.log(produtos);

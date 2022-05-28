function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * 1 + imposto}`
}

const produto = {
    nome:'Notebook',
    preco:4589,
    desc:0.15,
    getPreco
}
global.preco = 20
global.desc = .5
console.log(getPreco());
console.log(produto.getPreco());

const carro = {
    preco:45890,
    desc:0.20
}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$')); //Call você passa os parâmetros diretamente pela função
console.log(getPreco.apply(global, [0.17, '$'])); //Aplly você passa os parâmetros dentro de um array
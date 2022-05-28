// Coleção dinâmica de pares chave/valor

const produto = new Object

produto.valor = 30
produto['Marca do Produto'] = `Genérica`
produto.nome = 'Cadeira'
console.log(produto);

delete produto.valor
delete produto['Marca do Produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: '89000',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Cleusa',
            idade: 119
        }],

    calcularValorSeguro: () => {
    }
    
}
carro.proprietario.endereco.numero = 1000
carro[`proprietario`][`endereco`][`logradouro`] = `Avenida GRANDONA`
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores)
// console.log(carro.condutores.length)

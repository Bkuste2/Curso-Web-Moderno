// Objetivo = Retornar array apenas com o precos usando map
/* 
*   Transformar JSON em Objeto
*   Pegar os preços
*/


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]


const paraObjeto = json => JSON.parse(json)
const getPreco = obj => (`R$ ${obj.preco.toFixed(2).replace(`.`,`,`)}`)

const resultado = carrinho.map(paraObjeto).map(getPreco)
console.log(resultado);

/* 
const pegarPreco = carrinho.map(value => {
    let paraObjeto = JSON.parse(value)
    const arrayPrecos = []
    arrayPrecos.push(`R$ ${paraObjeto.preco.toFixed(2).replace(`.`,`,`)}`)
    return arrayPrecos
})
console.log(pegarPreco); 
*/
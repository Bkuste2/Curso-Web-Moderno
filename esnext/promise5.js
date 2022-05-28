const funcionarOuNao = (valor,chanceErro) => {
    return new Promise((acepted, rejected) =>{
        if(Math.random() < chanceErro){
            rejected('Ocorreu um erro')
        }
        else{
            acepted(valor)
        }
    })
}

funcionarOuNao('testando', 0)
    .then(valor => `Valor: ${valor}...`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log( 'Quase fim '))
    .then(() => console.log( `fim!`))
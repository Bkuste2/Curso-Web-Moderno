const recerberMelhorEstudante = object => {
    const soma = array => array.reduce((a, b) => {return a + b}) 
    const media = array => soma(array) / array.length

    const newObject = {}

    const entradas = Object.entries(object)
    for(let i in entradas){
        object[entradas[i][0]] = media(entradas[i][1])
    }
    const maiorMedia = Math.max.apply(null, Object.values(object))
    const posicaoMaiorMedia = Object.values(object).indexOf(maiorMedia)
    const entradas2 = (Object.entries(object));

    newObject.nome = entradas2[posicaoMaiorMedia][0] 
    newObject.media = entradas2[posicaoMaiorMedia][1] 
    console.log(newObject);
}

recerberMelhorEstudante(
{
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}
) // retornará { nome: "Mariana", media: 7.875 }
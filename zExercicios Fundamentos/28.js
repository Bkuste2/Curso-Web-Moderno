const filtrarPorQuantidadeDeDigitos = (array, num) => {
    const arrayFeito = []
    for(let i in array){
        let arraySplit = String(array[i])
        const arrayPalavras = arraySplit.split('')
        if(arrayPalavras.length == num){
            arrayFeito.push(array[i])
        }
    }
    console.log(arrayFeito);
}
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]

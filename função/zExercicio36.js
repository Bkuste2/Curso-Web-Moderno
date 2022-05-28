/*  36)Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será 
*   resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5
*/

const multiplicandoVetor1 = (vetor, multiplicador) => {
    const vetorMultiplicados = new Array
    for(i in vetor){
        const num = vetor[i] * multiplicador
        vetorMultiplicados.push(num)
    }
    return vetorMultiplicados
}

const multiplicandoVetor2 = (vetor, multiplicador) => {
    if(multiplicador >= 5){
        const vetorMultiplicados = new Array
        for(i in vetor){
            const num = vetor[i] * multiplicador
            vetorMultiplicados.push(num)
        }
        return vetorMultiplicados
    }
    else{
        return `Valor do multiplicador é menor que 5: (${multiplicador}), Função inválida`
    }
}


const vetor = [1, 2, 3, 4, 5]
console.log(multiplicandoVetor1(vetor, 6));
console.log(multiplicandoVetor2(vetor, 4));

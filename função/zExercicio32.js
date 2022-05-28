// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const mediaAritmeticaVetor = vetor => {
    let notas = 0
    for(num in vetor){
        notas += vetor[num]
    }
    const mediaAritmetica = (notas/vetor.length).toFixed(1)
    return mediaAritmetica
}

let vetor = [10, 7, 10, 8, 6]
console.log(mediaAritmeticaVetor(vetor));

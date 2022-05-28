// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const maiorMenor = vetor => {
    console.log(`No vetor ${vetor}`);
    vetor.sort((a, b) => a - b)
    let menor = vetor[0]
    let maior = vetor[vetor.length -1]
    console.log(`O maior número é ${maior} e o menor número é ${menor}`);
}
let vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
maiorMenor(vetor)
// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

const contarNegativos = vetor => {
    let ctdNegativos = 0
    const vetorNegativos = []
    let ctdPositivos = 0
    const vetorPositivos = []

    for (num in vetor){
        if (vetor[num] < 0){
            vetorNegativos.push(vetor[num])
            ctdNegativos++
        }
        else{
            vetorPositivos.push(vetor[num])
            ctdPositivos++
        }
    }
    console.log(`Números negativos: ${vetorNegativos} (${ctdNegativos})`);
    console.log(`Números positivos: ${vetorPositivos} (${ctdPositivos})`);
}

let vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
contarNegativos(vetor)
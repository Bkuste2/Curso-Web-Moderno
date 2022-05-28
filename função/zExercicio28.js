// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

const vetor = [6,32,123,41,9,5,4]
let par = 0
let impar = 0

for(let vet in vetor){
    if(vetor[vet] % 2 == 0){
        par++
    }
    else{
        impar++
    }
}
console.log(`Impar: ${impar}`);
console.log(`Par: ${par}`);
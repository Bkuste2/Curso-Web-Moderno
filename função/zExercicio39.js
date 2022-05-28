/*  39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB
*   e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

const trocaVetores = (vet1, vet2) => {
    if(vet1.length == vet2.length){
        for(n in vet1){
            vet1[n] = vet1[n] + vet2[n]
            vet2[n] = vet1[n] - vet2[n]
            vet1[n] = vet1[n] - vet2[n]
        }
        console.log(`Vetor 1: ${vet1}`);
        console.log(`Vetor 2: ${vet2}`);
    }
    else{
        console.log('Os arrays precisam ter o mesmo tamanho');
    }
}
const vetor1 = [1,2,3,4]
const vetor2 = [5,6,7,8]
const vetor3 = [5,6,7,8,9]
trocaVetores(vetor1,vetor2)
trocaVetores(vetor1,vetor3)

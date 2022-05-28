/*  38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os númerosímpares que estão entre esses valores. Por padrão os valores devem
*   ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

const calculaImpares = (max = 100,min = 0) => {
    
    if(max < min){
        let aux = 0
        aux = max
        max = min
        min = aux
    }

    for(let i = min; i <= max; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
calculaImpares(3, 19)

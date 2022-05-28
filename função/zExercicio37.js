/*  37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo)  
*   e r (a razão) e escreva os n termos , bem como a soma dos elementos.
*/


const progressaoAritmetica = (n, a1, r) => {
    const arrayAritmetica = new Array
    for(let i = 0; i < n; i++){
        arrayAritmetica.push( a1 + r * i); 
    }

    let soma = arrayAritmetica[0]
    
    for(let i = 1; i < arrayAritmetica.length; i++){
        soma += arrayAritmetica[i]
    }

    console.log(arrayAritmetica);
    console.log(`Total da Progressão Aritmética: ${soma}`);
}
progressaoAritmetica(10, 10, 15)

console.log(/---------------------------------------------------------------------------------/);
console.log(/---------------------------------------------------------------------------------/);
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
const progressaoGeometrica = (n, a1, r) => {
    const arrayGeometrica = new Array
    
    for(let i = 0; i < n; i++){
        arrayGeometrica.push(a1*(r**i)); 
    }

    let soma = (a1 * ((r**n)-1))/(r-1)
    
    console.log(arrayGeometrica);
    console.log(`Total da Progressão Geométrica: ${soma}`);

}
progressaoGeometrica(10, 5, 3)
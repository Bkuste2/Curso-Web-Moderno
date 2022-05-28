const gerarNumerosEntre = (min, max) =>{
    if(min > max){
        [min,max] = [max, min]
    }
    return new Promise(resolve =>{
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(random)
    })
}
let numero = 0
gerarNumerosEntre(1, 10)
    .then(num => {
        numero = num 
        return (num * 10)
    })
    .then((numX10) => console.log(`O número ${numero} vezes 10 é igual a: ${numX10}`))
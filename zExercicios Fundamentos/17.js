const somaArray = array => array.reduce((acumulador, atual)=>{
    return acumulador + atual
})


console.log(somaArray([10, 10, 10]));
console.log(somaArray([15, 15, 15, 15]));
console.log(somaArray([17,13,24,69,64]));
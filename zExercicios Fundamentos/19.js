const calcularMedia = array =>{
    const resultado = array.reduce((acumulador, atual) => {
        return acumulador + atual
    })
    console.log(resultado / array.length); 

}
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3

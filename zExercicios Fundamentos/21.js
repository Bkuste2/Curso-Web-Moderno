const menorNumero = array => {
    /* 
        array.sort((a,b)=> a - b)
        console.log(array[0]); 
    */
    let menor = 0
    console.log(Math.min.apply(null, array))
}

menorNumero([10, 5, 35, 65]) // retornarĂ¡ 5
menorNumero([5, -15, 50, 3]) // retornarĂ¡ -15
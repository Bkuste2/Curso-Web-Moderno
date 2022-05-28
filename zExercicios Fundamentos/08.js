const multiplicar = (x,y)=>{
    const resultado = Math.imul(x,y)
    if (x >= 0 && y >= 0 && x % 1 == 0 && y % 1 == 0) {
        console.log(resultado);
    }
    else{
        console.log('Somente números inteiros positivos são aceitos');
    }
}
multiplicar(5, 5)
multiplicar(0, 7)
multiplicar(0, 7.1)
multiplicar(0, -7)

const calculaFatorial = n =>{
    const numeroInicial = n
    for(let i = n - 1; i > 0; i--){
        console.log(` ${n} * ${i} = ${n *= i}`);
    }
    console.log(` ${numeroInicial}! é igual a: ${n}`);
}
calculaFatorial(6)
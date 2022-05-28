const classificacaoTriangulos = (base,expoente) => {
    // const numeroElevado = Math.pow(base,expoente)
    const numeroElevado = base ** expoente

    console.log(`${base} elevado a ${expoente} potência`); 
    console.log(`O resultado é: ${numeroElevado} \n`); 
}

classificacaoTriangulos(1,2)
classificacaoTriangulos(2,6)
classificacaoTriangulos(5,3)
classificacaoTriangulos(3,5)
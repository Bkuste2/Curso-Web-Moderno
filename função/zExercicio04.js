const divisao = (dividendo, divisor) => {
    const resultado = Math.floor(dividendo / divisor)
    const restoDaDivisao = dividendo % divisor
    console.log(`O resultado desta divisão é ${resultado}, e o resto da divisão destes dois números é ${restoDaDivisao}`);
}

divisao(1,5)
divisao(11,4)
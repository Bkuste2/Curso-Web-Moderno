const formatarValores = valor => {
    const valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    return valorEmReais
}
console.log(formatarValores(0.1 + 0.3));

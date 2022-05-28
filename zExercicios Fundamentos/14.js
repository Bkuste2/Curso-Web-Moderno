const objetoParaArray = objeto =>{
    console.log(Object.entries(objeto));
}


objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
    
objetoParaArray({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
    
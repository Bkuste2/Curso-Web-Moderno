const removerPropriedade = (objeto, remover)=>{
    const newObject = objeto
    for( let i in newObject){
        if (i == remover) {
            delete newObject[i]
        }
    }
    console.log(newObject);
}


removerPropriedade({a: 1, b: 2}, "a")
removerPropriedade({a: 1, b: 2}, "b")
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}


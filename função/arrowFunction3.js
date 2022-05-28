let comparaComThis = function (p) {
    console.log(p === this);
}
comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Com a arrowFunction o this passa do escopo global para o próprio módulo da função, ou seja, o arquivo da função
comparaComThisArrow = (p) =>{
    console.log(p === this);
}
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


// A função .bind() não funciona com arrowFunctions, porque o this da arrowFunction é associado ao próprio contexto em que a função foi escrita
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


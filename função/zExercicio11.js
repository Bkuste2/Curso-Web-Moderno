
const anoBissexto = ano => {
    const fraseAfirmacao = `O ano ${ano} é bissexto`
    const fraseNegacao = `O ano ${ano} não é bissexto`

    if(ano < 0){
        return `O ano inserido (${ano}) é inválido!`
    }
    else if(ano % 400 == 0){
        return fraseAfirmacao
    }
    else if (ano % 100 == 0) {
        return fraseNegacao
    }
    else if(ano % 4 == 0){
        return fraseAfirmacao
    }
    else{
        return fraseNegacao
    }
}

console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
const fs = require('fs')
const path = require('path')



function lerLinha(arquivo ,num){
    return new Promise((acept, reject) => {
        const caminho = path.join( __dirname, `/${arquivo}`)

        fs.readFile(caminho, 'utf-8', (_, conteudo)=>{
            const linha = conteudo.split(/\r?\n/)
            if(num != undefined){
                acept(linha[num - 1]);
            }
            else{
                acept(conteudo)
            }
        })
    })
}

// Meu jeito para pegar o valor de apenas uma linha
lerLinha('dados.txt', 2)
    .then(linha => `Valor da linha escolhida: ${linha}`)
    .then(console.log)


/*   Jeito do professor ""  */
/* 
lerLinha('dados.txt')
    .then(content => content.split(/\r?\n/))
    .then(linhas => linhas.join(', '))
    .then(frase => `Conteudo final: ${frase}`)
    .then(console.log)
*/
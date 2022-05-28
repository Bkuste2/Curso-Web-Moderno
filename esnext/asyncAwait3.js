const gerarNumerosEntre = (min, max, numerosProibidos) =>{
    if(min > max){
        [min,max] = [max, min]
    }
    return new Promise((resolve, reject) =>{
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        let proibidos = []
        proibidos = numerosProibidos
        if(proibidos.includes(random)){
            reject('Numero Inválido')
        }else{
            resolve(random)
        }
    })
}

async function gerarMegaSena(qtdNumeros, qtdTentativas = 1){
    try{
        const nums = []
        for(let _ of Array(qtdNumeros).fill()){
            nums.push(await gerarNumerosEntre(1,60,nums))
        }
        return nums
    }
    catch(e){
        if(qtdTentativas > 10){
            throw "puta merda, perdemo."
        } else{
            gerarMegaSena(qtdNumeros, qtdTentativas + 1)
        }

    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

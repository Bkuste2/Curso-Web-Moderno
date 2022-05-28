function esperarPor(tempo = 2000){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(), tempo)
    })
}

// esperarPor(2000)
// .then(()=> console.log('Executando Promise 1...'))
// .then(esperarPor)
// .then(()=> console.log('Executando Promise 2...'))
// .then(esperarPor)
// .then(()=> console.log('Executando Promise 3...'))

function retornarValor(){
    return new Promise(resolve => setTimeout(() => resolve(10), 5000))
}

function retornarValorRapido(){
    return 20
}

async function executarDeVerdade(){
    const valor = await exec()
    console.log(valor)
}

async function exec(){

    let valor = await retornarValorRapido()


    await esperarPor()
    console.log(`Assync/Await ${valor}`)
    
    await esperarPor()
    console.log(`Assync/Await ${valor + 1}`)
    
    await esperarPor()
    console.log(`Assync/Await ${valor + 2}`)

    return valor + 3

}
executarDeVerdade()
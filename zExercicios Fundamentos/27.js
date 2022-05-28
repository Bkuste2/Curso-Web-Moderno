
const inverter1 = object =>{
    let copia = {}
    const entradas = Object.entries(object)
    
    for(let i = entradas.length - 1; i >= 0; i--){
        title = entradas[i][0]
        value = entradas[i][1]
        copia[title] = value
    }
    console.log(copia);
}

inverter1({ a: 1, b: 2, c: 3}) 


const inverter2 = object =>{
    const entradas = Object.entries(object)
    const copia = {}
    for(let i = 0;i < entradas.length; i++){
        title = entradas[i][1]
        value = entradas[i][0]
        copia[title] = value
    }
    console.log(copia);
}

inverter2({ a: 1, b: 2, c: 3}) 
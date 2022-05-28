function gerandoNumeroAleatorio(min,max) {
    const numero = Math.random() * (max-min) + min
    return (Math.ceil(numero))    
}

let batata = 0

do {
    batata = gerandoNumeroAleatorio(90,101)
    console.log(batata);
}while(batata != 101)
// Arrow Function
const somar = (a,b) => a + b
console.log(somar(1,4));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log( texto = 'Node'){
    console.log(texto);
}
log()
log('Batata')

// Operador rest
function total(...number){
    const somarItems = (acumulador, valor) => acumulador + valor
    const total = number.reduce(somarItems)
    console.log(total);
}
total(2,3,4,5)
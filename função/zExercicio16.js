const calculadora = (operador, x,y) => {
    switch (operador){
        case ('+'):
            console.log(`${x} + ${y} = ${x + y}`);
            break
        case('-'):  
            console.log(`${x} - ${y} = ${x - y}`);
            break
        case('*'):
            console.log(`${x} * ${y} = ${x * y}`);
            break
        case('/'):
            console.log(`${x} ÷ ${y} = ${x / y}`);
            break
        default:
            console.log('Operação Inválida');
    }
}
calculadora('+', 3,4)
calculadora('-', 3,4)
calculadora('*', 3,4)
calculadora('/', 3,4)
calculadora('÷', 3,4)
const nums = [1,2,3,4,5]

// Map() => é basicamente um for com um propósito, ele gera um novo array, e pode ter até 3 parâmetros: O valor, o índice e o próprio array 

let resultado = nums.map((value) =>{ return value * 20})
console.log(nums);
console.log(resultado);

const soma10 = value => value + 10
const triplo = value => value * 3
const paraDinheiro = value => ` R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);
/* 
resultado = nums.map(soma10)
console.log(resultado);
resultado = nums.map(triplo)
console.log(resultado);
resultado = nums.map(paraDinheiro)
console.log(resultado); 
*/

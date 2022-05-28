let num1 = 1
let num2 = 2

num1++
console.log(num1);

--num1 // Os operadores "--" ou "++" antes do número/variável são interpretados antes dos operadores "--" ou "++" depois do número/variável
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);
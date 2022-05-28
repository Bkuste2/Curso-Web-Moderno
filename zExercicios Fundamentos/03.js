const calcularSalario = (horasMes, valorHora) => `"Salário igual a R$ ${(horasMes * valorHora).toFixed(2).replace('.', ',')}`

console.log(calcularSalario(30, 30));
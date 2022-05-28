// operador ...rest(juntar)/spread(espalhar)
// usar rest com parâmetro da função

// usar spread com obj
const funcionario = {nome:'Maria', salario: 12345}
const clone = {ativo: true, ...funcionario}
console.log(clone);

// usar spread com array
const grupoA = ['Doug', 'Jacbson', 'Afonso']
const final = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoA,final);
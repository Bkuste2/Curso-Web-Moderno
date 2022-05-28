const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Pop() => remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos);

// Push() => adiciona um novo elemento na ultima posição
pilotos.push('Verstappen')
console.log(pilotos);

// Shift() => remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos);

// Unshift() => adiciona um novo elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos);

// Splice() => O primeiro parâmetro é o índice e o segundo é quantos elementos você quer excluir apartir do índice, e os demais é oq você está adicionando apartir dali

pilotos.splice(2,0, 'bottas', 'Massa') // Adicionamos apartir do indice 2 os elementos: 'bottas' e 'Massa'.
console.log(pilotos);

pilotos.splice(3,1) // Removemos 1 elemento apartir do índice 3 no caso o próprio índice 3
console.log(pilotos);

// Slice => Cria um novo array partir do índice passado como parâmetro
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);

console.log(pilotos);
const algunsPilotos2 = pilotos.slice(1,4) // Pedaço de array
console.log(algunsPilotos2);
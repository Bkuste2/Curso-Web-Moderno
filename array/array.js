console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
aprovados.push('Abia') 
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[0] === null)

console.log(aprovados);

// Sort() =>  Organiza em ordem alfabética ou em caso de números, na ordem crescente
aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana']


// Splice => O primeiro parâmetro é o índice e o segundo é quantos elementos você quer excluir apartir do índice, e os demais é oq você está adicionando apartir dali
aprovados.splice(1,0, 'Elemento1', 'Elemento2')
console.log(aprovados );
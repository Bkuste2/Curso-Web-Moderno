// Não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Palmeiras')
times.add('Avai')
times.add('Flamengo')
times.add('Avai')

console.log(times);
console.log(times.has('avai'));
console.log(times.has('Avai'));
times.delete('Flamengo')
console.log(times.has('Flamengo'));

const nomes = [`Raquel`, 'Pedro', 'Lucas', 'Julia', 'Pedro']
console.log(nomes);
const nomesSet = new Set(nomes)
console.log(nomesSet);
// No ForEach() o primeiro parâmetro sempre será o elemento do array e o segundo o índice, e o terceiro e ultimo parâmetro o próprio array

const aprovados = ['Agatha', 'Pedro', 'João', 'Cleusa', 'Marcos']

aprovados.forEach((nome, indice) => {
    console.log(`O candidato: ${nome} ficou em ${indice + 1} lugar`);
})
/* aprovados.forEach((nome, indice, array, x) => {
    console.log(`O candidato: ${nome} ficou em ${indice + 1} lugar`);
    console.log(array);
    console.log(x);
}) */

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(indice + 1, aprovado);
aprovados.forEach(exibirAprovados)

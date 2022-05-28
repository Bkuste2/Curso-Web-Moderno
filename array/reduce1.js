// Reduce() => Percorre o array e soma os elementos desde o primeiro do array ou de um padrão pré-definido

const alunos = [
    {nome:'João', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.5, bolsista: true},
    {nome:'Pedro', nota:  9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map( alunos => alunos.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
}, 0)
console.log(resultado);
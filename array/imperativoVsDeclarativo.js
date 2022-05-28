const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// imperativo
let total1 = 0
for(a in alunos){
    total1 += alunos[a].nota
}
console.log(total1 / alunos.length);


// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) / 2
console.log(total2);
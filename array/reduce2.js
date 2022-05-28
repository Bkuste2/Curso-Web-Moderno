const alunos = [
    {nome:'João', nota: 7.3, bolsista: true},
    {nome:'Maria', nota: 9.5, bolsista: false},
    {nome:'Pedro', nota:  9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true}
]

const verificarTodosBolsistas = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado && bolsista)
console.log(verificarTodosBolsistas);

const algumBolsista = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado || bolsista) 
console.log(algumBolsista);
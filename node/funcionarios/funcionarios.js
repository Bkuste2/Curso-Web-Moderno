const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


// Modo que eu fiz antes da aula
const array = []
const arrayNumeros = []

axios.get(url).then(response => {
    const funcionarios = response.data
    for(let i in funcionarios){
        if(Object.entries(funcionarios[i])[6][1] === 'China' && Object.entries(funcionarios[i])[4][1] === 'F'){
            array.push(funcionarios[i])
        }
    }
    for(let i in array){
        arrayNumeros.push(Object.entries(array[i])[8][1])
    }
    const menorSalario = Math.min.apply(null, arrayNumeros)
    const posicaoMenorSalario = arrayNumeros.indexOf(menorSalario)
    console.log(array[posicaoMenorSalario]);
})

/*  Método do professor
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = ((funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
})
axios.get(url).then(response => {
    const funcionarios = response.data
    
    const funcionario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(funcionario);
})
*/
// Criando Objeto de forma literal
const obj1 = {}
console.log(obj1);

// Objeto em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// Função construtora
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}
const p1 =  new Produto('Caneta', 7.99, 0.15)
const p2 =  new Produto('Laptop', 4000.99, 0.25)
console.log(p1.nome, p1.getPrecoComDesconto());
console.log(p2.nome, p2.getPrecoComDesconto());

// Função Factory
const criarFuncionario = (nome,salarioBase, faltas) => {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('Jorge', 7980, 4)
const funcionario2 = criarFuncionario('Douglas', 2000, 0)

console.log(funcionario1.getSalario(), funcionario2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')

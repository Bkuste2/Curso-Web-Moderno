// Forma Literal
function fun1() {

}

// Armazenar em uma Variável
const fun2 = function () {
    
}

// Armazenar em um Array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0] (2, 3));

// Armazenar em um atributo de Objeto
const obj = {}
obj.falar = function () {
    return 'OPA!!'
}
console.log(obj.falar());


// Passar Função como Parâmetro
function run(fun){
    fun()
}
run(function () {
    console.log('Executando...');
})

// Uma função pode ser Retornada como Parâmetro
function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(45,93)(8)
const cincoMais = soma(2,3)
cincoMais(4)
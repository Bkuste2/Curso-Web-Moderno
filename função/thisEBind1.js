const pessoa= {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Não funciona por conta que o this deixou de apontar para o objeto pessoa


//O bind, neste caso deixara o this voltado sempre para o objeto pessoa, porém ele está fazendo isso somente para a variável falarDePessoa
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()
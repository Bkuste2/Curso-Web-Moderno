const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor);
console.log(sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900 // A sequência só aceita números maiores
console.log(sequencia.valor, sequencia.valor);
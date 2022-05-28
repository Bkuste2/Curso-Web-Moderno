

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Pedro', 'João', 'Cleusa', 'Marcos']

aprovados.forEach2((nome, indice, array) => {
    console.log(`O candidato(a): ${nome} ficou em ${indice + 1} lugar`);
    // console.log(array);
})
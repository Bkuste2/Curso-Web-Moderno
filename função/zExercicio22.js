const anuidade = (mes,valor) => {
    if(mes > 0 && mes <13){
        let atraso = mes - 1
        return parseInt(valor * (1 + (5/100)) ** atraso)
    }
    else{
        return `Mês Inserido invalido`
    }
}
console.log(anuidade(4, 100));
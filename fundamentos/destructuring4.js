function rand([min = 0, max = 1000]){
    if(min > max){ 
        [min,max] = [max,min] //Isso fará que caso o valor do minimo informado pelo usuário for maior que o valor máximo ele inverta os 2
    }

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

// Passando os 2 parâmetros
console.log(rand([50,40]));

// Alterando apenas o minimo
console.log(rand([500]));

// Alterando o valor máximo
console.log(rand([,5]));

// Deixando os valores padrões
console.log(rand([]));

// Aqui acontecerá problemas por conta da tentativa de desestruturação de um elemento que está nulo ou indefinido
// console.log(rand());
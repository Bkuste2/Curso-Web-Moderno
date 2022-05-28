const simboloMais = (num)=>{
    let string = ''
    for(let i = 0;i < num; i++){
        string += '+'
    }
    return string
}

console.log(simboloMais(8));

for(let i = 1; i <= 10; i++){
    console.log(simboloMais(i));
}
for(let i = 11; i > 0; i--){
    console.log(simboloMais(i));
}
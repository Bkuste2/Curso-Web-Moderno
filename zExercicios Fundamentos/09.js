const repetir = (parametro, repeticoes)=>{
    const newArray = []
    for(let i = 0;i < repeticoes;i++){
        newArray.push(parametro)
    }
    console.log(newArray);
}

repetir('aaaa', 3)
repetir(3, 8)
repetir([],3)
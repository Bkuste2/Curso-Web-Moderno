const inverso = (parametro) =>{
    let newParametro

    const tipoParametro = typeof parametro
    if (tipoParametro == "number") {
        newParametro = -parametro
    }
    else if(tipoParametro == "boolean"){
        newParametro = !parametro
    }
    else{
        newParametro = `booleano ou número esperados, mas o parâmetro é do tipo ${tipoParametro}`
    }
    return  newParametro
}

console.log(inverso(-15));
console.log(inverso(15));
console.log(inverso(true));
console.log(inverso(false));
console.log(inverso(()=>{}));
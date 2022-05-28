const receberPrimeiroEUltimoElemento = (array)=>{
    const newArray = []
    newArray.push(array[0])
    newArray.push(array[array.length - 1])
    console.log(newArray);
}
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])
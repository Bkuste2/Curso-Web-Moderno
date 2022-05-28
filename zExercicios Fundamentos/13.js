const filtrarNumeros = (array)=>{
    const arrayNumeros = []
    for(let i in array){
        if(typeof array[i] === "number"){
            arrayNumeros.push(array[i])
        }
    }
    console.log(arrayNumeros);
}
filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])
const receberSomenteOsParesDeIndicesPares = array => {
    const arrayParesEIndicesPares = []
    for(let i in array){
        if (i % 2 == 0  && array[i] % 2 == 0) {
            arrayParesEIndicesPares.push(`Numero ${array[i]}, na posição ${i}`)
        }
    }
    console.log(arrayParesEIndicesPares);
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])

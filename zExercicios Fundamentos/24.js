const contarCaractere = (letra, string) => {
    let contador = 0
    const contar = string.split('')     // Pode ser trocado por charAt() 
    for(i in contar){               
        if (contar[i] == letra) {
            contador++
        }
    }
    console.log(contador);
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (minimo > maximo) {
        let temp = maximo
        maximo = minimo
        minimo = temp
    }
    if (inclusivo == true) {
        if (numero <= maximo && numero >= minimo) {
            return true
        }
        else{
            return false
        }
    }
    else{
        if (numero < maximo && numero > minimo) {
            return true
        }
        else{
            return false
        }
    }
}
console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 3, true));
const checarAnoBissexto = ano => {
    if (ano % 4 == 0) {
        if (ano % 400 == 0) {
            return true
        }
        if (ano % 100 != 0) {
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}
console.log(checarAnoBissexto(2024));
console.log(checarAnoBissexto(2100));


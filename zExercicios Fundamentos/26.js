const removerVogais = string =>{
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(e => string = string.replace(e,''))

    console.log(string);
}

removerVogais("Cod3r") // retornarĂ¡ "Cd3r"
removerVogais("Fundamentos") // retornarĂ¡ "Fndmnts"
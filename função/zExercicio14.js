const Frutas = fruta => {
    switch (fruta){
        case ('Maçã'):
            console.log("Maçã -  Não vendemos esta fruta aqui");
            break
        case ('Kiwi'):
            console.log("Kiwi -  Estamos com escassez de kiwis");
            break
        case ('Melancia'):
            console.log("Melancia -  Aqui está, são 3 reais o quilo");
            break
        default:
            console.log('ERROR 404');
    }
}
Frutas('Maçã')
Frutas('Kiwi')
Frutas('Melancia')
Frutas('Banana')
const diaDaSemana = dia => {
    switch (dia){
        case 1: case 7:
            console.log('Fim De Semana');
            break

        case 6: case 5: case 4: case 3: case 2: case 1:
            console.log('Dia De Semana');
            break

        default:
            console.log('Dia inválido');        
    }
}
diaDaSemana(1)
diaDaSemana('8')
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana('a')
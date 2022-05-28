const resolvendoBhaskara = stringPontuacoes => {
    let pontuacoes = stringPontuacoes.split(", ")
    
    let qtdQuebraDeRecords = 0
    let piorJogo = 1

    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 0; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            qtdQuebraDeRecords ++
        }
        else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao == pontuacoes[i]
            piorJogo = i + 1
        }
    }

    console.log(`Você quebrou seu recorde ${qtdQuebraDeRecords} vezes, meus parabéns!`);
    console.log(``);
}

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

resolvendoBhaskara(stringPontuacoes)
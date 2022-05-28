const resolvendoBhaskara = (a = 0, b = 0, c = 0) => {
    const resultados = []
    const delta = ((b**2) - (4*a*c))
    if(delta < 0){
        console.log(`Delta = ${delta}, como o delta é negativo é impossível continuar!`);
    }

    else{
        const xLinha = (-b + Math.sqrt(delta)) / 2*a
        const x2Linhas = (-b - Math.sqrt(delta)) / 2*a
    
        resultados.push(parseFloat(xLinha.toFixed(2)))
        resultados.push(parseFloat(x2Linhas.toFixed(2)))
    
        console.log(resultados);
        console.log(delta);        
    }
}

resolvendoBhaskara(); // Parâmetros padrões
resolvendoBhaskara(3, 1, 2) // Delta fica negativo
resolvendoBhaskara(1,3,1); // Funcionando perfeitamente.
resolvendoBhaskara(9,-24,16); // Funcionando perfeitamente.
resolvendoBhaskara(1,-2,4); // Delta fica negativo

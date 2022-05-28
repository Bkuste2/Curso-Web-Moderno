const calculoJurosSimples = (C,i,t) => {
    const juros =  C * i * t
    const montante = C + juros
    
    console.log(`Capital inicial: ${C}`);
    console.log(`Juros: ${juros}`);
    console.log(`Montate: ${montante}`);
}
calculoJurosSimples(100, 10/100, 2)


const calculoJurosCompostos = (C,i,t) => {
    const montante =  C * (1 + i) ** t
    console.log(Math.floor(montante));
}
calculoJurosCompostos(100, 10/100, 2)
const media = (codigo, n1,n2,n3) =>{
    const notas = [n1,n2,n3]
    notas.sort((a,b) => a - b ? 1 : -1)

    const mediaPonderada = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    
    if(mediaPonderada >= 5){
        console.log(`Código de aluno: (${codigo})
            Nota 1 = ${notas[0]}
            Nota 2 = ${notas[1]}
            Nota 3 = ${notas[2]}
            Sua média foi: ${mediaPonderada}, você foi aprovado!
        `);
    }
    if(mediaPonderada < 5){
        console.log(`Código de aluno: (${codigo})
            Nota 1 = ${notas[0]}
            Nota 2 = ${notas[1]}
            Nota 3 = ${notas[2]}
            Sua média foi: ${mediaPonderada}, você foi reprovado!
        `);
    }
}
media(15, 5, 5, 5)

    
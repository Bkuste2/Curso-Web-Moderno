const notas = [7.6, 8.9, 9.7, 5.3, 2.1, 1.4]

//Sem calback

const notasBaixas1 = []
for (let i in notas){
    if( notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1);

// Com Callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2);



const notasMenoresQue7 = (nota) => nota >= 7
const notasAltas = notas.filter(notasMenoresQue7)
console.log(notasAltas);

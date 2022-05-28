/*  40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja 
*   atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

const conceitoAluno = vetor => {
    console.log(`Tabela de conceitos: 
0,0 a 4,9 = Conceito D;
5,0 a 6,9 = Conceito C;
7,0 a 8,9 = Conceito B;
9,0 a 10 = Conceito A;
/----------------------------------
Notas = ${vetor}
    `);
    for (n in vetor) {
        const nota = vetor[n]
        if (nota >= 0 && nota <= 4.9) {
            console.log(`Nota (${nota}): Conceito D`);
        }
        else if (nota >= 5 && nota <= 6.9) {
            console.log(`Nota (${nota}): Conceito C`);
        }
        else if (nota >= 7 && nota <= 8.9) {
            console.log(`Nota (${nota}): Conceito B`);
        }
        else if (nota >= 9 && nota <= 10) {
            console.log(`Nota (${nota}): Conceito A`);
        }
        else {
            console.log(`Nota (${nota}): Nota inválida`);
        }
    }
}
const vetorNotas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8, -1]
conceitoAluno(vetorNotas)

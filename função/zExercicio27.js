/*  27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se
*   a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

const taxaAnualCrianca = (altura1, taxaCrescimento1, altura2, taxaCrescimento2) => {
    if(altura1 == altura2){
        if(taxaCrescimento1 > taxaCrescimento2){
            console.log(`As duas crianças tem a mesma altura (${altura1}cm), porém a taxa de crescimento anual da primeira criança é maior, sendo assim em um ano ultrapassará a altura da segunda criança em um ano.`);
        }
        else if(taxaCrescimento1 < taxaCrescimento2){
            console.log(`As duas crianças tem a mesma altura (${altura1}cm), porém a taxa de crescimento anual da segunda criança é maior, sendo assim em um ano ultrapassará a altura da primeira criança em um ano.`);
        }
        else{
            console.log(`As duas crianças tem a mesma altura (${altura1}cm), e a mesma taxa de crescimento (${taxaCrescimento1}cm) ao ano, portanto ficarão com a mesma altura.`);
        }
    }else{
        if(altura1 >= altura2){
            if(taxaCrescimento1 >= taxaCrescimento2){
                console.log(`A primeira criança é mais alta e tem uma taxa de crescimento maior ou igual a da segunda criança, portanto será mais alta`);
            }
            else{
                console.log(`A criança menor ultrapassara a maior em ${calcularTempo(altura1, taxaCrescimento1, altura2, taxaCrescimento2)} ano(s).`);
            }
        }
        else{
            if(taxaCrescimento2 >= taxaCrescimento1){
                console.log(`A segunda criança é mais alta e tem uma taxa de crescimento maior ou igual a da segunda criança, portanto será mais alta`);
            }
            else{
                console.log(`A criança menor ultrapassara a maior em ${calcularTempo(altura1, taxaCrescimento1, altura2, taxaCrescimento2)} ano(s).`);
            }
        }
    }
}
const calcularTempo = (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) =>{
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}
taxaAnualCrianca(101,39,100,40)
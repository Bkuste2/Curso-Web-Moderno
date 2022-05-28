
/* 
const maiorOuIgual = (n1, n2) => {
    if(n1 === n2){
        return true
    }
    else{
        return false
    }
}
console.log(maiorOuIgual(1,1)) 
*/

const maiorOuIgual = (n1, n2) => {
    if(n1 === n2){
        return `Os dois valores são iguais`
    }else if(n1 > n2){
        return `${n1} é maior que ${n2}`
    }
    else{
        return `${n2} é maior que ${n1}`
    }
}
console.log(maiorOuIgual(1,1)) 
console.log(maiorOuIgual(2,1)) 
console.log(maiorOuIgual(1,6)) 
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(5));


dobro = (a) =>{
    return 2 * a
}
console.log(dobro(10));

dobro = a => 2 * a  // Return Implícito
console.log(dobro(Math.PI));


let ola = function () {
    return 'Olá'
}
console.log(ola());

ola = () => { 
    return 'Olá'
}
console.log(ola());

ola = _ => 'olá' // Possui parâmetro porém pode ser ignorado
console.log(ola());

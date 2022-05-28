console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Igão Bonitão'.reverse());

Array.prototype.first = function() {
    return this[0]
}
console.log([1,2,3,4,5].first());
console.log(['a','b','c','d','e'].first());

/* String.prototype.toString = function(){   // Nunca faça isso, substituir funções padrões do prototype
    return 'lascou tudo'
} */

console.log('Igão Bonitão'.reverse());


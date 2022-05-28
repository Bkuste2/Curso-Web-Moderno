// Estratégias Antigas
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = b || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) 

function soma2(a,b,c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c =  isNaN(c) ? 1 : c // Das antigas a melhor
    return a + b + c 
}
console.log(soma2());
console.log(soma2(3));
console.log(soma2(3,4));
console.log(soma2(3,4,5));
console.log(soma2(0, 0, 0));

// Nova Estratégia ES2015
function soma3(a = 1, b = 1, c = 1 ) {
    return a + b + c
}

console.log(soma2());
console.log(soma2(3));
console.log(soma2(3,4));
console.log(soma2(3,4,5));
console.log(soma2(0, 0, 0));



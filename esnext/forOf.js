for(let letra of "Cod3r"){
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

console.log();
console.log('For of, pega o valor');
for(let i of assuntosEcma){
    console.log(i);
}

console.log();
console.log('For in, pega o índice');
for(let i in assuntosEcma){
    console.log(i);
}

console.log();
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto);
}

console.log();
console.log('For of, Chaves');
for (let chaves of assuntosMap.keys()){
    console.log(chaves);
}

console.log();
console.log('For of, Valores');
for (let valores of assuntosMap.values()){
    console.log(valores);
}

console.log();
console.log(`For of, entradas (destructuring)`);
for( let [chave,valor] of assuntosMap.entries()){
    console.log(chave, valor)
}
const s = new Set(['a','b','c'])

for(let letra of s){
    console.log(letra);
}
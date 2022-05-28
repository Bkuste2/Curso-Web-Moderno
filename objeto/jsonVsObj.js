const obj = {a: 1, b: 2, c: 3, Soma(){return a + b + c} }
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"));
console.log(JSON.parse('{"a":1,"b":2,"c":3}'));
console.log(JSON.parse('{"a": 1.8, "b": "string", "c": true, "d": {}, "e": []}'))
const passarParaObj = JSON.parse('{"a": 1.8, "b": "string", "c": true, "d": {}, "e": []}')

passarParaObj.pessoa = `Oi`
console.log(passarParaObj);
// Cadeia de protótipos (prototype chain)
Object.prototype.Attr0 = '0'
const avo = {Attr1: 'A'}
const pai = {__proto__: avo, Attr2:'B', Attr3: '3'}
const filho = {__proto__: pai, Attr3:'C'}

console.log(pai.Attr1);
console.log(filho.Attr0, filho.Attr1, filho.Attr2, filho.Attr3);

const Carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual == this.velMax
        }
    },
    status(){
       return `Velocidade máxima permitida = ${this.velMax}, velocidade atual = ${this.velAtual}`
    }
}
const ferrari = {
    modelo: 'f40',
    velMax: 324, // Shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, Carro)
Object.setPrototypeOf(volvo, Carro)

ferrari.acelerarMais(300)
console.log(ferrari.status());
volvo.acelerarMais(100)
console.log(volvo.status());


const num1 = 1
const num2 = 2
const num3 = 3

const obj1 = {num1: num1, num2: num2, num3: num3}
const obj2 = {num1,num2,num3}
console.log(obj1, obj2);


const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);

const obj5 = {
    funcao1: function() {
        // ..........
    },
    funcao2:     () => {
        //;;;;;;;;;;;
    },
    funcao3(){
        // //////////
    }
}
console.log(obj5);
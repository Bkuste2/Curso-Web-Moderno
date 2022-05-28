// let e const
{
    var a = 1
    let b = 3
    console.log(b);
}
console.log(a);

// Template String
const produto = `iPad`
console.log(`${produto} 
é 
caro!`);

// Destructuring
const [l,e, ...tras] = "Cod3r"
console.log(l); 
console.log(e); 
console.log(tras, ...tras)

const [,,,x, ,y] = [1,2,3,4,5,6,7]
console.log(x,y);

const {nome: name, idade: age} = {nome: 'Ana', idade: 9}
console.log(name,age);

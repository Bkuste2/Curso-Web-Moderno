const pai = {
    nome: 'Pedro',
    corCabelo: 'preto',
    sobrenome: 'Peixoto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
filha1.corCabelo = 'loiro'
console.log(filha1);
console.log(filha1, filha1.sobrenome);

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} ${filha2.sobrenome} tem cabelo da cor ${filha2.corCabelo}`);    

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança ${key}`);
    
}
function Carro(maxVel = 200, delta = 5) {
    // Atributo privado === escopo da função 
    let velocidadeAtual = 0

    // Metodo Público
    this.acelerar = () => {
        if(velocidadeAtual + delta <= maxVel )
        {
            velocidadeAtual += delta
        }
        else
        {
            velocidadeAtual = maxVel
        }
    }
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari =  new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

// console.log(typeof Carro);
// console.log(typeof uno);
// console.log(uno);
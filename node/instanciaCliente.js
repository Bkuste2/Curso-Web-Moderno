// Como pudemos ver anteriormente, quando simplesmente exportamos o objeto sem ser por meio de uma função factory, e ele tiver algum
// atributo mudado, o node salvara todos no mesmo lugar.
// Mas quando criamos o objeto a partir de uma função factory os seus atributos continuarão preservados

const contadorA = require('./instanciaUnica')  
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);
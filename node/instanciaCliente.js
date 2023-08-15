const contadorA = require('./instanciaunica')
const contadorB = require('./instanciaunica')

const contadorC =require('./instanciaNova')()
const contadorD =require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
console.log(contadorC.valor, contadorD.valor)
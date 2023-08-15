//podemos definir um conjunto de caracteres para encontrar por regex
//basta estar entre []
//com um traço podemos definit um intervalo também

const reg1 = /[1,2,3,4,5]/
console.log(reg1.test("Temos o numero 6?"))
console.log(reg1.test("Temos o numero 3?"))
const reg2 = /[0-9]/
console.log(reg2.test("Temos o numero 983470191?"))
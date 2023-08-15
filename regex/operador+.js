//quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez

const reg1 = /\d+/
console.log(reg1.test("123"))
console.log(reg1.test("123456789"))
console.log(reg1.test("teste"))
console.log(reg1.test("123teste"))
//podemos colocar uma instrução na regex que funciona como um || das consicionas
const reg1 = /\w+: (Matheus|João|Maria)/ //aqui temos um conjunto de caracteres que podem ser encontrados
console.log(reg1.test("Nome: Matheus"))
console.log(reg1.test("Nome: João"))
console.log(reg1.test("Nome: Maria"))
console.log(reg1.test("Nome: Pedro"))
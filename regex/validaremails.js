//para validar um email com regex precisamos de uma expressão que valide o usuario, o @ e o dominio
const validaremail = /\w+@\w+\.\w+/
console.log(validaremail.test("luis@gmail.com"))
console.log(validaremail.test("luis@gmail"))
console.log(validaremail.test("luis@.com"))
console.log(validaremail.test("luis@.com.br"))

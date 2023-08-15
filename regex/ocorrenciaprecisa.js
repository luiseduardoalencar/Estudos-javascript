//inserir o número de ocorrencia precisa entre {}
const cep = /\d{5}-\d{3}/
console.log(cep.test("12345-123"))
console.log(cep.test("1234-123"))
console.log(cep.test("123456-123"))

const tel =/\(\d{2}\)\d{4,5}-\d{4}/
console.log(tel.test("(11)99999-9999"))
console.log(tel.test("(11)9999-9999"))
console.log(tel.test("(11)999999999"))
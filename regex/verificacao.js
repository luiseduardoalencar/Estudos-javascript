let ano = /\d\d\d\d/
console.log(ano.test("2018") && "2019".length == 4)
console.log(ano.test("ajsn"))
console.log(ano.test("20"))
console.log(ano.test("20hfj19"))

let palavrastresletras = /\w\w\w/

console.log(palavrastresletras.test("teste") && "teste".length == 3)
console.log(palavrastresletras.test("tes"))

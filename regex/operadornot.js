//podemos escrever um set que aceitam tudo, menos alguns caracteres com o not
//lembrando que combinações são aceitas, o negado é apenas se bate com o set
const notab = /[^ab]/
console.log(notab.test("a"))
console.log(notab.test("b"))

const nottoaz = /[^a-z]/
console.log(nottoaz.test("123 as"))//ele só aceita se não tiverem isoladas
console.log(nottoaz.test("a"))

const nottoaz2 = /[a-z]/
console.log(nottoaz2.test("123 as"))
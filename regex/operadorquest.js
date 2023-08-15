//faz com que o digito anterior seja opcional
const opcional = /abacax?i/
console.log(opcional.test("abacai"))
console.log(opcional.test("abacaxi"))

const opcional2 = /\d+\w?/
console.log(opcional2.test("123"))
console.log(opcional2.test("123a"))
console.log(opcional2.test("123 "))
console.log(opcional2.test("123 123"))
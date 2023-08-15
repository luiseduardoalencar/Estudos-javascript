/*
\d - Qualquer digito de caractere
\w - um caractere alfanumérico("teste")
\s - qualquer caractere de espaço em branco
\D - um caractere que não é um digito
\W - um caractere não alfanumérico
\S - um caractere que não é espaço em branco
. - 1 caractere qualquer exceto linha nova
*/
const pontoRegex = /./
console.log(pontoRegex.test("teste"))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test(" "))

const dRegex = /\d/
console.log(dRegex.test("teste"))
console.log(dRegex.test("123"))
console.log(dRegex.test(" "))

const wRegex = /\w/
console.log(wRegex.test("teste"))
console.log(wRegex.test("123"))
console.log(wRegex.test(" "))

const sRegex = /\s/
console.log(sRegex.test("teste"))
console.log(sRegex.test("123"))
console.log(sRegex.test(" "))

const DRegex = /\D/
console.log(DRegex.test("teste"))
console.log(DRegex.test("123"))
console.log(DRegex.test(" "))

const WRegex = /\W/
console.log(WRegex.test("teste"))
console.log(WRegex.test("123"))
console.log(WRegex.test(" "))

const SRegex = /\S/
console.log(SRegex.test("teste"))
console.log(SRegex.test("123"))
console.log(SRegex.test(" "))


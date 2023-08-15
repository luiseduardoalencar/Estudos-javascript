const validardata = /[0-31]{2}[/][0-12]{2}[/][1900-2023]{4}/
console.log(validardata.test("12/12/2012"))
console.log(validardata.test("12/12/12"))
console.log(validardata.test("12/12/1234"))
console.log(validardata.test("12/12/12345"))
const validardominio = /[?www].\w+.com.br|.com/
console.log(validardominio.test("www.123.com.br"))
console.log(validardominio.test("www.123.com"))
console.log(validardominio.test("www.google.com.br"))
console.log(validardominio.test("www.google"))
console.log(validardominio.test("google.com"))
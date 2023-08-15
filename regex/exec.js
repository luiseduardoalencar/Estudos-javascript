//o metodo exec nos retorna um objeto com informações sobre a expressão
//se nada for encontrado, ele retorna null

const digitos = /\d+/
console.log(digitos.exec("tem o numero 100 aqui"))
console.log(digitos.exec("tem o numero aqui"))
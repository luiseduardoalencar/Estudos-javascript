//array heterogenio
const valores = [2.2, 3.4, 4.5, 5.6]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 3
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, "teste")
console.log(valores)
console.log(valores.pop())//retira o ultimo valor do array
delete valores[0]
console.log(typeof valores) 
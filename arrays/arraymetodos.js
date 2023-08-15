const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // remove o último elemento do array
console.log(pilotos)
pilotos.push("Verstappen")// adiciona um elemento no final do array
console.log(pilotos)
pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)
pilotos.unshift("Hamilton") //adiciona um elemento no inicio do array
console.log(pilotos)
pilotos.splice(2,0, "Bottas", "Massa")// o primeiro elemento é o indice, o segundo é a quantidade de elementos que serão excluidos, e os demais são os elementos que serão adicionados
console.log(pilotos)
pilotos.splice(3,1)//remove um elemento a partir do indice 3
console.log(pilotos)
const algunspilotos = pilotos.slice(2)//retorna um novo array a partir do indice 2
console.log(algunspilotos)
const algunspilotos2 = pilotos.slice(1,4)//retorna um novo array a partir do indice 1 até o indice 4, sem incluir o indice 4
console.log(algunspilotos2)

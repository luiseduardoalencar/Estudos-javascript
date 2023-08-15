//Arrays são estruturas indexadas, heterogêneas e dinâmicas
console.log(typeof Array, typeof new Array, typeof [])
let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)

//recomendado criar array da forma literal
aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = "Paulo" //adiciona um elemento na posição 3
aprovados.push("Abia") //adiciona um elemento no final do array
console.log(aprovados.length)
aprovados[9] = "Rafael" //adiciona um elemento na posição 9, e as posições vazias ficam undefined
console.log(aprovados)

aprovados.sort() //ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1,2, "Elemento1","Elemento2") //o primeiro elemento é o indice, o segundo é a quantidade de elementos que serão excluidos, e os demais são os elementos que serão adicionados
console.log(aprovados)
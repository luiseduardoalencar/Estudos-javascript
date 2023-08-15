//foreach é a forma mais simples de percorrer um array
const aprovados = ["Bia", "Carlos", "Ana", "Paulo"]
aprovados.forEach(function(nome, indice, array){//função callback que será chamada para cada elemento do array, passando o nome e o indice
console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibiraprovados)


//Object.preventExtensions
//evita que o objeto seja extendido, ou seja, não é possível adicionar novos atributos
//mas é possível excluir e modificar atributos
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção"
})

console.log("Extensivel:", Object.isExtensible(produto))
produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca" // não é possível adicionar
delete produto.tag
console.log(produto)

//Object.seal
//não é possível adicionar nem excluir atributos, mas é possível modificar
const pessoa = {nome:"Juliana", idade: 35}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // não é possível adicionar
delete pessoa.nome // não é possível excluir
pessoa.idade = 29 // é possível modificar
console.log(pessoa)
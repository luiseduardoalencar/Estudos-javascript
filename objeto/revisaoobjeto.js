const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario:{
        nome: "Raul",
        idade: 56,
        endereco:{
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    consutores:[{
        nome: "Junior",
        idade: 19
    }],
    calcularValorSeguro: function(){

    }
}
carro.proprietario.endereco.numero = 1000
console.log(carro)

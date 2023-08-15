const fs = require("fs")

const produto = {
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15
}
//quero transformar o objeto em texto, então utilizarei o método JSON.stringify

fs.writeFile(__dirname +'/arquivogerado.json', JSON.stringify(produto), err =>{//err é uma callback
    console.log(err || 'Arquivo salvo!')//caso err seja nulo, imprima "Arquivo salvo!"
})
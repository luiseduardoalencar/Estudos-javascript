//Filter é uma função que serve para filtrar elementos de um array

const produtos = [ //array com objetos
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
const eCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil

console.log(produtos.filter(eCaro).filter(eFragil))
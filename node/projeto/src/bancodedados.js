const sequence = {
    _id: 1,
    get id() { return this._id++ }
}
const produtos = {}


function salvarproduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getproduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}
function excluirProduto(id){
    const produto = produtos[id]
    delete produto[id]
    return produto
}

module.exports = {salvarproduto, getproduto, getProdutos, excluirProduto}
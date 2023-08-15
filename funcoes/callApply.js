function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) //NaN pois o this.preco não está definido
global.preco = 20
global.desc = 0.1
console.log(getPreco())// agora sim, o this.preco está definido

console.log(produto.getPreco())


//a diferença entre call e apply é a forma de passar os parametros
//call e apply são usados para chamar uma função 

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro)) //call chama a função e passa os parametros
console.log(getPreco.apply(carro)) //apply chama a função e passa os parametros

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro, [0.17, "$"])) //apply passa os parametros em um array
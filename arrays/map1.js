const nums = [1,2,3,4,5]
//For com propósito
let resultado = nums.map(function(e){//map é um for com propósito, ele gera um novo array
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`//parseFloat converte para float, toFixed define a quantidade de casas decimais, replace substitui o ponto por vírgula
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)//map pode ser encadeado
console.log(resultado)
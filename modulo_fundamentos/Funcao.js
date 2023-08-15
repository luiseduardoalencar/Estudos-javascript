console.log(typeof Object)
class Produto {}
console.log(typeof Produto)

// Funções
function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)//NaN, pois um dos parâmetros não foi passado

//Função com retorno
function soma(a,b = 1){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))

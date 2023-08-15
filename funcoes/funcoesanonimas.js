const soma = function (x,y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)   
imprimirResultado(3,4, function(x,y){
    return x-y
})

imprimirResultado(3,4,(x,y) => x * y ) // toda arrow function é anonima

const pessoa = {
    falar: function(){ //atributo falar recebe uma função anonima, através de chave:valor
        console.log("Opa")
    }
}
pessoa.falar
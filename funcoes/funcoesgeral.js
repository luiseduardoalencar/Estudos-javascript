//forma literal
function fun1(){}

//armaznar uma função numa variável
const fun2 = function(){}

//armazenar em um array
const array = [function (a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function (){return 'opa'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    fun()
}

run(function() {console.log("Executando")})

//uma função pode retornar/conter uma outra função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(8,6)(4)
const cincomais = soma(2,3)
cincomais(4)
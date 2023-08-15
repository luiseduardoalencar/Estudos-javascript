
//Classes são funções construtoras, que podem ser instanciadas
class Pessoa{
    constructor(nome){
        this.nome = nome
        
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa("Joao")
p1.falar()

//função construtora
//esse objeto consegue identificar o contexto lexico por conta da função arrow, então não precisa do this
const pessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = pessoa("Alberto")
p2.falar()

//Utilizando uma factory
function Pessoa2(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p3 = new Pessoa2("Carlos")
p3.falar()
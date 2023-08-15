function Pessoa1(){
    this.idade = 0
    setInterval(function(){ //função que serve como temporizador
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // utilizando o bind para amarrar o this ao objeto, agora o idade será incrementado
}
new Pessoa1

function Pessoa2(){
    this.idade = 0
    const self = this //ao armaenar o this em uma constante, o this não irá variar
    setInterval(function(){ //função que serve como temporizador
        self.idade++
        console.log(self.idade)
    }, 1000)
}


new Pessoa2
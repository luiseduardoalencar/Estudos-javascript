console.log(Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Exec...")
    }
}

const Obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(obj3.nome)
obj3.exec()
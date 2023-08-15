let compararComThis = function (param) {
    console.log(this === param)
}
compararComThis(global) 

const obj = {}
comparaComThis = compararComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//a arrow function sempre aponta para o objeto que ela foi escrita, não é possível mudar o contexto de execução dela, mesmo usando o bind
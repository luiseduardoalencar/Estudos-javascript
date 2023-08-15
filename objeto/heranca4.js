function meuObjeto(){}
console.log(meuObjeto.prototype)
const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()    

// Resumo:
// 1. A partir de uma função construtora, é possível criar objetos
// 2. A partir de uma classe, é possível criar objetos
// 3. A partir de um objeto literal, é possível criar objetos
// 4. A partir de uma função factory, é possível criar objetos
// 5. A partir de uma função construtora, é possível criar objetos
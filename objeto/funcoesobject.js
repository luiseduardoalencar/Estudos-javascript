const pessoa ={
    nome: "Rebeca",
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) // retorna as chaves do objeto
console.log(Object.values(pessoa)) // retorna os valores do objeto
console.log(Object.entries(pessoa)) // retorna as chaves e valores do objeto(registros)

Object.entries(pessoa).forEach(e =>{// percorre o array e retorna os elementos
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) =>{// percorre o array e retorna os elementos, usando um destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa,"dataNascimento",{
    enumerable: true,
    writable: false,
    value: "01/01/2019"
})

pessoa.dataNascimento = "01/01/2017"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // concatena os objetos, sobrescrevendo os valores de chaves iguais
console.log(obj)
//Object.prototype é o objeto pai de todos os objetos
//__proto__ é o atributo que aponta para o objeto pai
//prototype só existe na função Object e __proto__ só existe nos objetos
const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.__proto__) // consigo acessar o objeto pai e procurar atributos
console.log(ferrari.__proto__ === Object.prototype ) 
console.log(volvo.__proto__ === Object.prototype )

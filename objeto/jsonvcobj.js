//JSON é muito utilizado entre integrações de sistemas, pois é um formato de dados que é facilmente interpretado por diversas linguagens de programação.
const obj = {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //o formato JSON é sempre delimitado por aspas simples, e os atributos por aspas duplas
console.log(JSON.parse('{"a":1, "b": "string", "c":true, "d":{}, "e":[]}')) //é possível passar outros tipos de dados, como string, boolean, objetos e arrays
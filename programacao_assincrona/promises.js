//as promises são funções que podem ou não ser executadas, dependendo de uma condição
//o objeto da promise é Promise, e ela tem 3 estados: pending, fulfilled, rejected
//o then é o que vai ser executado quando a promise for fulfilled
//resolve é o método que vai ser executado quando a promise for fulfilled
let p = Promise.resolve(5 + 8)

console.log("Outros códigos")
console.log(p)

p.then((value) => {return value + 2})
.then((value) => {console.log(value)})


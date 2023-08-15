let isAtivo = false
console.log(isAtivo)

isAtivo = 1// se comporta como verdadeiro
console.log(!!isAtivo) // !! = negação da negação, ou seja, true
console.log(!isAtivo)

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})

console.log("os falsos...")
console.log(!!0)
console.log(!!"")//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!("" || null || 0 || "ola"))

let nome = "Lucas"
console.log(nome || "Desconhecido")
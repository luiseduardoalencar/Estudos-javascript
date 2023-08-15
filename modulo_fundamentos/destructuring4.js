function rand([min = 0, max = 1000]){
    if(min>max) [min,max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))//determina o valor minimo e maximo
console.log(rand([992]))//somente o valor minimo
console.log(rand([,10]))//so determina o maior
console.log(rand([]))//usa valores padroes
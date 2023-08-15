function verificarnumero(num){
return new Promise((resolve,reject) => {
    if(num == 2){
        resolve("O número é 2")
    }else{
        reject(new Error("O número não é 2"))
    }
})
}
console.log(verificarnumero(2))
console.log(verificarnumero(5))
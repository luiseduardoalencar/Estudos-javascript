//nas async functions, podemos determinar uma instrução await, que vai esperar a promise ser resolvida para continuar a execução

function somacomdelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b)
        },2000)
    })
}

async function resSoma(a,b,c){
    let x = somacomdelay(a,b)
    let y = c

    return await x + y
}

console.log(resSoma(1,2,3).then(value => console.log(value)))
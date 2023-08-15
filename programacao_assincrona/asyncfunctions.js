//Podemos criar funções assíncronas com a palavra async
//elas retornam uma promise
async function somar(a,b){
    return a + b
}

somar(5,8).then((value) => console.log(value))

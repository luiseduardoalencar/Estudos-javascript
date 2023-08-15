const valor = "Global"

//quando uma função foi declarada dentro do javascript, ela carrega consigo o local onde ela foi definida
//por isso ela identifica o valor global
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}

exec()
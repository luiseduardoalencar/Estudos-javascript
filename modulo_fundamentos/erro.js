function tratarErroELancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {//codigo que pode gerar erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {//tratamento do erro
        tratarErroELancar(e)
    } finally {//sempre será executado
        console.log('final')
    }
}

const obj = {name: "Roberto"}
imprimirNomeGritado(obj)
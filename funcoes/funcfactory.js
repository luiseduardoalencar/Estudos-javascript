//funções factory são funções que retornam um objeto
function criarPessoa(){
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}
console.log(criarPessoa())
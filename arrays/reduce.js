//Reduce utiliza uma função sobre um acumulador e cada elemento do array (da esquerda para a direita) 
//para reduzir a um único valor.

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista:true},
    {nome: 'Pedro', nota: 9.8, bolsista:false},
    {nome: 'Ana', nota: 8.7, bolsista:true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0/**0 é o ponto inicial do acumulador*/)
console.log(resultado)

//verifica se todos são bolsistas
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))
//verifica se pelo menos um é bolsista
const algumBolsista = (resultado, bolsista) => bolsista || resultado
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
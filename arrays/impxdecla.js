//imperativo vs declarativo em javascript são duas formas de escrever o código
const alunos = [
    {nome: 'João', nota: 7.3},
    {nome: 'Maria', nota: 9.2},
]

//imperativo é uma forma de programar que foca no passo a passo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo
//é uma forma de programar que foca no que tem que ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
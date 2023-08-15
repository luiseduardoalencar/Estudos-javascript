/**06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */
function calculomontantesimples(capital_inicial, taxa_juros, tempo_aplicado){
    return `R$ ${capital_inicial + (capital_inicial * taxa_juros * tempo_aplicado)}`
}
function calculamontazecomposto(capital_inicial, taxa_juros, tempo_aplicado){
    return `R$ ${capital_inicial * (1 + taxa_juros) ** tempo_aplicado}`
}
console.log(calculomontantesimples(100,0.1,2))
console.log(calculamontazecomposto(100,0.1,2))
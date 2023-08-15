//funcionam semelhante as promises
//onde ações podem ser pausadas e continuadas depois
//caracterizadas pelo function* e yield
//o yield pode salvar o estado da variável
function* criadorID(){
    let id = 0
    while(true){
        yield id++
    }
}

let criaID = criadorID()

console.log(criaID.next().value)
console.log(criaID.next().value)
console.log(criaID.next().value)
console.log(criaID.next().value)
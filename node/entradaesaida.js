// O comando node entradaesaida -a representa a execução do arquivo entradaesaida.js com uma flag -a

const anonimo = process.argv.indexOf('-a') !== -1 //se estiver presente dentro da lista de argumento o -a ele vai ser diferente de -1

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit() 
    })
}

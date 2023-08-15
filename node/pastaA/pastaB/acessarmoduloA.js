//acessar módulos dentro do projeto
const moduloA = require("../../moduloA")
console.log(moduloA.bomDia)

//pode ser vidualizado ao acessar localhost:8080 no navegador
const http = require("http")
http.createServer((req,res) => {
    res.write("Infraestrutura da plataforma interna da Investe!")
    res.end()
}).listen(8080)

//roda o teste dois que está no arquivo index, dentro da pastac
const c = require("./pastac/index")
console.log(c.ola2)

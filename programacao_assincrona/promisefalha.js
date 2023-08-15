let p = Promise.resolve(new Error("Não deu certo"))
console.log("Outros códigos")

p.then((value) => console.log(value)).catch(reason => console.log("FALHOU: "+ reason)) //o catch é o que vai ser executado quando a promise for rejected
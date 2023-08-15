const escola = "Cod3r"
console.log(escola.charAt(4))//charAt é o caracter na posição 4
console.log(escola.charAt(5))//não gera erro, apenas não mostra nada
console.log(escola.indexOf("3"))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))//vai do index 0 até o 3, sem incluir o 3
console.log("Escola".concat(escola).concat("!"))
console.log(escola.replace(3, "e"))
console.log(escola.replace(/\d/, "e"))//substitui todos os digitos pela letra e
console.log(escola.replace(/\w/g, "e"))//substitui todas as letras e digitos pela letra e
console.log("Ana,Maria,Pedro".split(","))//gera um array com 3 elementos, separados por virgula
console.log("Escola" + escola + "!")
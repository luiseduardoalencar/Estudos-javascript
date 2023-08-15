const nums = [1,2,3,4,5,6,7,8,9,10]
//o break interrompe a execução do código quando o índice 5 é encontrado
for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

//nesse momento, o continue apenas pula o índice 5, mas continua a execução do código
for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//rotulo
//não é recomendado o uso de rótulos, pois o código fica confuso
externo:
for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

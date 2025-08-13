// Entre 1 e 100
let n = 54
if(n > 100){
    console.log(`[ERRO] Seu número (${n}) é maior que o limite imposto!`)
} else if(n < 1){
    console.log(`[ERRO] Seu número (${n}) é menor que o limite imposto!`)
} else if(n >= 1 && n <= 100){
    console.log(`Seu número (${n}) está de acordo com o limite imposto!`)
} else{
    console.log(`Número invalido!`)
}
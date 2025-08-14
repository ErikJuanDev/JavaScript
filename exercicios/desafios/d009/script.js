function somarNumeros(){
    let soma = 0
    let numero 
    let res = document.getElementById("resultado")
    while(numero = Number(prompt("Digite um número (0 para parar):"))){
        if(numero !== 0){
            soma += numero
        }
    }
    res.innerHTML = `O resultado com os valores escolhidos é: ${soma}`
}
function NumeroPrimo(){
    let numero = document.getElementById(`primo`)
    let num = 2
    let r = document.getElementById("resultado")

    

    if(num <= 1) {
        r.innerHTML = `[ERRO] Número inválido`
    } 
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            r.innerHTML = `${num} não é um número primo` // achou divisor (nao é primo)
        } else {
            r.innerHTML = `${num} é um número primo!`
        }
    } 
    
}
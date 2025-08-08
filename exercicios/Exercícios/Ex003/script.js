function Envio(){
    let inicio = document.getElementById("in")
    let fim = document.getElementById ("num")
    let passo = document.getElementById("passo")
    let res = document.getElementById("res")

    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[Erro] Dados preenchidos incorretamente!")
    } else {
        res.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // c == contador
    for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449}`
    } 
    res.innerHTML += `\u{1F3C1}`
    }
}
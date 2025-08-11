function Enviado() {
    let parimpar = document.getElementById("txtn")
    let result = document.getElementById("res")

    let valor = (parimpar.value)
    result.innerHTML = ``
    if (valor.length == 0) {
        result.innerHTML = `[ERRO]Número ínvalido`
    } else {
        if (valor % 2 == 0) {
            result.innerHTML = `O número ${valor} é par!`
        } else {
            result.innerHTML = `O número ${valor} é ímpar!`
        }
    }
}
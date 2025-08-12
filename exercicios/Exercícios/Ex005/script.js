function Adicionar() {
    let num = document.getElementById(`txtn`)
    let add = document.getElementById(`selvel`)
    let valor = (num.value)
    valor = []

    if (num.value.length == 0 || num.value > 100 || num.value < 1) {
        window.alert("O valor inserido é ínvalido!")
    } else {
            valor.push
            let item = document.createElement("option")
            item.text = `O Valor ${valor} foi adicionado`
            add.appendChild(item)
    }
}
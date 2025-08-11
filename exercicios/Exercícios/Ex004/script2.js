function tabuada() {
    let tb = document.getElementById("txtn")
    let selc = document.getElementById("seltab")

    if (tb.value.length == 0) {
        window.alert("[ERRO] Número inválido")
    } else {
        let num = Number(tb.value)
        selc.innerHTML = ``
        // let c é mesma coisa que vezes(x)
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tb${c}`
            selc.appendChild(item)
        }
    }
}
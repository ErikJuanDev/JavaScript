function tabuada() {
    let t = document.getElementById("tab")
    let seltab = document.getElementById ("seltab")
    if(t.value.length == 0){
        window.alert = ("[ERRO] Número invalido")
    } else{
        window.alert = ("tudo ok")
        let num = Number(t.value)
    }
}
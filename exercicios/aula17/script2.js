function enviarCEP(){
    let CEPRecebido = document.getElementById("cep").value;
    if (CEPRecebido.length === 8) {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", "https://viacep.com.br/ws/" + CEPRecebido + "/json/");
        ajax.send();
    
        ajax.onload = function () {
            document.getElementById("res").innerHTML = this.responseText;
        };
    } else {
        document.getElementById("res").innerHTML = "CEP inválido. Digite 8 números.";
    }
}
function ativarContagem() {
    time = document.getElementById("tempo")
    time.innerHTML = "A contagem acabou de comecar";

    //O setTimeout ativa a funcao 1 vez em determinado periodo de tempo!
    tempo = setTimeout(function () {
        time.innerHTML = "A contagem terminou!"
    }, 5000)
}

function pararContagem() {
    //cancela a execucao do setTimeout
    clearTimeout(tempo)
    time.innerHTML = "Contagem pausada!"
}


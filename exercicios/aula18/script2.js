function ativarContagem() {
    //O setInterval ativa repetidamente uma funcao em determinado periodo de tempo!
    tempo = setInterval(function () {
        let cronometro = document.getElementById("tempo").innerHTML;
        let soma = parseInt(cronometro) + 1
        document.getElementById("tempo").innerHTML = soma
    }, 1000)
}

function pararContagem() {
    clearInterval(tempo)
    
}
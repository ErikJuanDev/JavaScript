function Carregar(){
            let txt = document.getElementById("text")
            let img = document.getElementById("imagem")
            let ttl = document.querySelector("h1")
            let momento = new Date()
            let agora =  momento.getHours()
            if (agora >= 6 && agora <= 10){
            txt.innerHTML = `Agora são ${agora} horas da manhã.`
            img.src = 'imagens/manha.png'
            document.body.style.backgroundColor = '#efece0'
        } else if(agora >= 11 && agora < 18){
            txt.innerHTML = `Agora são ${agora} horas da tarde.`
            img.src = 'imagens/tarde.png'
            document.body.style.backgroundColor = '#eed3b4'
        } else if (agora >= 18 && agora <= 23){
            txt.innerHTML = `Agora são ${agora} horas da noite.`
            img.src = 'imagens/noite.png'
            document.body.style.backgroundColor = '#193d4b'
            ttl.style.color = "white"
        } else{
            txt.innerHTML = `Agora são ${agora} horas da madrugada.`
            img.src = 'imagens/madrugada.png'
            document.body.style.backgroundColor = '#406973'
            ttl.style.color = "white"
        }
    }
function Verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let agora = document.getElementById(`fano`)
    let res = document.getElementById(`result`)
    let idade = ano - Number(agora.value)
    let n = document.getElementById("nome")
    let name = (n.value)
    let fsex = document.getElementsByName("radsex")
    

    if(agora.value.length == 0 || agora.value <= 1924 || agora.value > ano){
        window.alert("[ERRO] Ano inválido!")
    } else if(n.value.length == 0 || n.value.length <=3){
            window.alert("[ERRO] Nome inválido!")
    }
     else {
        let img = document.createElement('img')
        img.setAttribute("id", "foto")
        img.style.height = "300px"
        img.style.width = "400px"
        let genero = ""
        if (fsex[1].checked) {
            genero = "homem"
            res.innerHTML = `Olá ${name}, vimos que você é ${genero} e tem ${idade} anos!`
            res.appendChild(img)
            if(idade <= 5){
                img.style.width = "300px"
                //bebe
                img.setAttribute("src", "bebe-h.png")
            } else if(idade < 13){
                //crianca
                img.style.height = "220px"
                
                img.setAttribute("src", "crianca-h.png")
            } else if (idade < 21){
                //jovem
                img.setAttribute("src", "adolescente-h.png")
                img.style.height = "250px"
            } else if (idade < 50){
                //adulto
                img.setAttribute("src", "adulto-h.png")
            } else {
                //idoso
                img.setAttribute("src", "idoso h.png")
                img.style.height = "250px"

            } 
        }else if(fsex[0].checked) {
            img.style.height = "200px"
            img.style.width = "300px"
            genero = "mulher"
            res.innerHTML = `Olá ${name}, vimos que você é ${genero} e tem ${idade} anos!`
            res.appendChild(img)
            if(idade <= 5){
                img.setAttribute("src", "bebe-m.png")
                //bebe
            } else if(idade < 13){
                //crianca
                img.setAttribute("src", "crianca-m.png")
            } else if (idade < 21){
                //jovem
                img.setAttribute("src", "adolescente-m.png")
            } else if (idade < 50){
                //adulto
                img.setAttribute("src", "adulta-m.png")
                img.style.height = "250px"
                img.style.width = "300px"
            } else {
                //idoso
                img.setAttribute("src", "idosa-m.png")
            }
        } else {
            window.alert("[ERRO] Sexo inválido!")
        }
        
    }
}
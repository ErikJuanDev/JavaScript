let num = document.getElementById(`txtn`)
let lista = document.getElementById(`selvel`)
let r = document.getElementById(`res`)
valor = []

function inLista(n, l) {
    if(l.indexOf(Number(n)) > -1){
        return true // o numero foi encontrado
    } else {
        return false //numero nao encontrado (nao existe)
    }
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) //É um numero de 1 a 100
        {
        return true
    } else {
        return false
    }
}
function Adicionar() {
    // se o numero for entre 1 e 100, retorna true
    
    //se o numero estiver na lista, retorna true que vira false, ou seja pode entrar esse numero caso ele nao esteja em lista
        if (isNumero(num.value) && !inLista(num.value, valor)){
            valor.push(Number(num.value))
            let item = document.createElement("option")
            item.text = `O Valor ${num.value} foi adicionado`
            lista.appendChild(item)
            
        } else {
            window.alert("Valor não encontrado ou já está na lista!")
        }
        num.value = ""
        num.focus()
    }

    function Final(){
    if (valor.length != 0){
        const comprimento = (valor.length)
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0 
        let media = 0
        for(let val in valor){
            soma += valor[val]
            if(maior < valor[val]){
                maior = valor[val]
            } else {
                menor = valor[val]
            }
            media = soma / valor.length
        }

        r.innerHTML = ""
        //comprimento
        r.innerHTML += `<p>O total de valores adicionados é ${comprimento}</p>`
        //maior valor
        r.innerHTML += `<p>O maior valor inserido é ${maior}.</p>`
        //menor valor
        r.innerHTML += `<p>O menor valor inserido  ${menor}.</p>`
        //Soma
        r.innerHTML += `<p>A soma dos valores inseridos é ${soma}.</p>`
        //Média
        r.innerHTML += `<p>A média dos valores inseridos é ${media}.</p>`
    } else {
        window.alert(`Adicione qualquer valor na lista para prosseguir!`)
    }
    }

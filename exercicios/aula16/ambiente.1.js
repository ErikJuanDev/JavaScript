valor = [1, 2, 6, 8, 3, 5]
lista = [2, 8, 5]

function NaLista(list, numero) {
    if (list.indexOf (Number(numero)) > -1) {
        return true
    } else {
        return false
    }
} 
function Lista(){
    
if(NaLista(valor)){
        console.log("Valor encontrado")
        } else{
            console.log("Valor invalido!")
        }
        valor = [2, 8, 5]
}

console.log(valor.length)

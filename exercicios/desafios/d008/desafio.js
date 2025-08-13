// maior numero

let valor = [5, 3, 7, 10, 2]
let maior = valor[0] 

for(let posicao in valor){
    valor.sort() // valor = [2, 3, 5, 7, 10]
    if(maior < valor[posicao]){ // maior == 2
        maior = valor[posicao]
        console.log (maior)
    } 
}
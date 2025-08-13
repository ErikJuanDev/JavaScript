// maior numero

let valor = [1  , 35, 43, 64, 12]
let maior = valor[0] 

    for(let posicao in valor){
    if(maior < valor[posicao]){ // maior == 5
        maior = valor[posicao]
    } 
}   console.log (maior)
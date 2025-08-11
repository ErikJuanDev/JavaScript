let ar = [8, 7, 6, 5, 4]
//        0, 1, 2, 3, 4

// c == contador
/*for(c = 0; c < ar.length; c++){
    console.log(`a posição ${c} tem valor ${ar[c]}`)
}
*/

// c == contador
for(let c in ar){
    console.log(`a posição ${c} tem valor ${ar[c]}`)
}
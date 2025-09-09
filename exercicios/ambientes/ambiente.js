let num = [100, 9, 12, 1, 3, 20, 5, 50];
num.sort((a, b) => a - b); // Ordem crescente
//num.sort((a, b) => b - a); // Ordem decrescente

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O menor valor do vetor é ${num[0]}`);
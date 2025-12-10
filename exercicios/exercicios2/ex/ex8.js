// Sorteia um número entre 1 e 50
const numeroSecreto = Math.floor(Math.random() * 50) + 1;

let tentativas = 5;
let acertou = false;

console.log("🎯 Jogo de Adivinhação!");
console.log("Tente adivinhar o número entre 1 e 50.");

while (tentativas > 0 && acertou === false) {
  const chute = Number(
    prompt(`Você tem ${tentativas} tentativa(s). Digite um número:`)
  );
  if (chute < 1 || chute > 50) {
  alert("Valor inválido! Digite entre 1 e 50.");
  continue; 
}
  if (chute === numeroSecreto) {
    alert(`${numeroSecreto} era o número. Parabéns!`)
    acertou = true
    break;
  } else if (chute < numeroSecreto) {
    alert("O número é maior")
  } else if (chute > numeroSecreto) {
    alert("O número é menor")
  }
  tentativas--; 
}
if (!acertou) {
  alert(`Suas tentativas acabaram. O numero era: ${numeroSecreto}`)
}

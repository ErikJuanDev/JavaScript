
const notas = []

for (let i = 1; i <= 3; i++) {
  let valor = Number(prompt("Digite a sua nota:"))
  notas.push(valor)
}
function calcularMedia(notas) {
  let soma = 0
  for (let i = 0; i < notas.length; i++){
    soma += notas[i]
  }
  return soma / notas.length
}

function verificaNotas(notas) {
  for (let nota of notas) {
    if (nota < 0 || nota > 10) {
      return false
    }
  }
  return true
}

// Validação

if (!verificaNotas(notas)) {
  console.log("Um dos numeros é invalido! digite numeros de 0 a 10")
} else {
  const media = calcularMedia(notas)

  console.log("Notas:", notas)
  console.log("Média:", media.toFixed(2))

  if (media >= 7) {
    console.log("Aprovado!")
  } else if (media >= 5) {
    console.log("Recuperacao!")
  } else {
    console.log("Reprovado!")
  }
}
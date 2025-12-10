// IMPAR PAR

const numero = Number(prompt("Digite um numero"));

if (numero % 2) {
  console.log("Esse numero é impar!")
} else if (numero === 0) {
  console.log("Esse numero é invalido")
} else {
  console.log("Esse numero é par!")
}
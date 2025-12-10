function maiorOuMenor(){
  let idade = Number(prompt("Digite sua idade"))
  const res = document.getElementById("res")

  if (idade < 18) {
    res.innerHTML = "Voce é menor de idade!"
  } else if (idade === 18) {
    res.innerHTML = "Voce é um jovem adulto!"
  } else {
    res.innerHTML = "Voce é de maior!"
  }
}
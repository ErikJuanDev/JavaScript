//JSON.stringify(objeto) - transforma objeto em texto

//JSON.parse(texto) - transforma texto em objeto

const usuario =
    {
        nome: "Julia",
        idade: 25,
        sexo: "Feminino",
}

//CONVERTEU O OBJETO PARA TEXTO
let objParaTexto = JSON.stringify(usuario)

//APLICOU O TEXTO NO HTML
document.getElementById("area").innerHTML = objParaTexto

//CONVERTEU O TEXTO PARA OBJETO
let textoParaObj = JSON.parse(objParaTexto)

//APLICOU O OBJETO EM CONSOLE
console.log(textoParaObj.sexo)
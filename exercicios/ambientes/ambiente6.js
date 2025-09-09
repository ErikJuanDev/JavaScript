     const usuarios = [{
             nome: "Pricila Vasconcelos",
             idade: 35,
             id: 123,
             sexo: "feminino"
         },
         {
             nome: "Fernando da Silva",
             idade: 23,
             id: 321,
             sexo: "masculino"
         },
         {
             nome: "Henrique de Sousa",
             idade: 16,
             id: 231,
             sexo: "masculino"
         },
     ]

//findindex - Devolve a posicao do objeto dentro do array

     //leia-se: achar a posicao do user dentro de usuarios
const acharUsuario = usuarios.findIndex((user) => {
    //leia-se: retorne o user de nome identico ao(...)
    return user.nome === "Fernando da Silva"
})
console.log(acharUsuario)
console.log(usuarios[acharUsuario].idade = 24)
 console.log(usuarios)
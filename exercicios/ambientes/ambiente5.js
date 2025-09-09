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

//filter
     
    //leia-se: filtrar itens dentro de usuario
const users = usuarios.filter((itens) => {
    //leia-se: qual item filtrar?
    return itens.idade >= 18
})
    console.log(users)
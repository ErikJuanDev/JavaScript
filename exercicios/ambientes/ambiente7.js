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

//map - percorre e mapeia a array, criando uma nova com base no que utilizarmos

const users = usuarios.map((users) => {
    if (users.idade >= 18) {
        return users.nome + " é maior de idade"
    }
    return users.nome + " é menor de idade"
})
console.log(users)

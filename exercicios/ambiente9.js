     const usuarios = [{
             nome: "Pricila Vasconcelos",
             idade: 35,
             id: 123,
             sexo: "feminino",
             ativo: true,
             maiordeidade: true
         },
         {
             nome: "Fernando da Silva",
             idade: 23,
             id: 321,
             sexo: "masculino",
             ativo: true,
             maiordeidade: true
         },
         {
             nome: "Henrique de Sousa",
             idade: 16,
             id: 231,
             sexo: "masculino",
             ativo: true,
             maiordeidade: false
         },
     ]

//every - todos os usuarios devem ter a mesma propriedade

     //leia-se: Veja se todos os users dentro de usuarios sao maiores de idade
const maiorDeIdade = usuarios.every((users) => {
    //leia-se: é verdade que todos os usuarios sao maiores? se sim, retorne true
    return users.maiorDeIdade === true
})

//leia-se: Veja se todos os users dentro de usuarios estao ativos
const usersAtivos = usuarios.every((users) => {
    // todos os users dentro de usuarios estao ativos? se sim, retorne true
    return users.ativo === true
})

console.log(maiorDeIdade)
console.log(usersAtivos)
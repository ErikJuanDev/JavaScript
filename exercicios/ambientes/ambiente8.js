     const usuarios = [{
             nome: "Pricila Vasconcelos",
             idade: 35,
             id: 123,
            sexo: "feminino",
             ativo: false,
         },
         {
             nome: "Fernando da Silva",
             idade: 23,
             id: 321,
             sexo: "masculino",
             ativo: true
         },
         {
             nome: "Henrique de Sousa",
             idade: 16,
             id: 231,
             sexo: "masculino",
             ativo: true
         },
     ]

//some - Verifica a condicao e retorna true ou false

//leia-se: procure users dentro de usuarios e veja se minha afirmacao e falsa ou verdadeira
const userInativo = usuarios.some((users) => {
    //leia-se: existem users inativos dentro dos usuarios?
    return users.ativo === false 
})
    //Resposta: true == existem users inativos.
console.log(userInativo)
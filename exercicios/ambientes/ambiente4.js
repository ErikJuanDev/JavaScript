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

//find - busca o primeirop item da condicao feita

    // leia-se: "encontre um item dentro de usuarios"
const user = usuarios.find((item) => {
        //leia-se: qual item encontrar? idade que seja identica a 35.
        return item.idade === 35
    })
console.log(user)
    
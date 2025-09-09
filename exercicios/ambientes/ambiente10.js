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

//reduce - reduzir o array e devolver algo de minha escolha

//leia-se: reduza o array para apenas o total do que eu quero dos users dentro de usuarios
const totalIdades = usuarios.reduce((total, users) => {
    //leia-se: idades consecutivamente somadas
    return total += users.idade

    // 0 é o valor inicial do total
}, 0)

console.log(totalIdades)

//Arrow function simplificada

const IDusuarios = usuarios.map((users) => users.id)

console.log(IDusuarios)

//Arrow function sem ()

const quadrado = num => num * num

/*Resumo
Quando nao tem nenhum parametro, 2 ou mais parametros, é obrigatório o uso dos ()

Quando tem 1 parametro apenas, esse uso se torna opcional*/
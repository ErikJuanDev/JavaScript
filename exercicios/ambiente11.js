const usuarios = [{
        nome: "Ana Silva",
        idade: 28,
        email: "ana.silva@email.com"
    },
    {
        nome: "Carlos Souza",
        idade: 35,
        email: "carlos.souza@email.com"
    },
    {
        nome: "Maria Oliveira",
        idade: 22,
        email: "maria.oliveira@email.com"
    }
];

// Exibe os dados dos usuários
const usuario = usuarios.forEach((user) =>
console.log(`Nome: ${user.nome}, Idade: ${user.idade}, Email: ${user.email}`)
)
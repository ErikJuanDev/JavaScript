const usuarios = [
    {
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
for(let usuario of usuarios){
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
};
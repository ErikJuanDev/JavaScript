function ListadeUsuarios(nome, idade, email) {
    // Array onde vamos armazenar os usuários
    let usuarios = [];

    // Função para adicionar usuário
    function adicionarUsuario(nome, idade, email) {
        // TODO: verificar se o email já existe
        // TODO: criar objeto usuário e adicionar ao array
    }

    // Função para listar todos os usuários
    function listarUsuarios() {
        // TODO: percorrer o array e mostrar os usuários
    }

    // Função para buscar usuários pelo nome (parcial ou completo)
    function buscarUsuarioPorNome(nome) {
        // TODO: filtrar os usuários pelo nome
    }

    // Função para remover usuário pelo email
    function removerUsuarioPorEmail(email) {
        // TODO: encontrar o usuário pelo email e removê-lo
    }

    // EXTRA: Função para ordenar usuários por idade
    function ordenarUsuariosPorIdade(crescente = true) {
        // TODO: ordenar o array por idade crescente ou decrescente
    }

    /* ------------------------------
       TESTE DO SISTEMA (exemplo)
    ------------------------------ */

    adicionarUsuario("Ana", 25, "ana@email.com");
    adicionarUsuario("Carlos", 30, "carlos@email.com");
    adicionarUsuario("Joana", 22, "joana@email.com");

    console.log("Todos usuários:");
    listarUsuarios();

    console.log("\nBuscando por 'an':");
    console.log(buscarUsuarioPorNome("an"));

    removerUsuarioPorEmail("carlos@email.com");

    console.log("\nApós remover Carlos:");
    listarUsuarios();

    console.log("\nOrdenados por idade crescente:");
    ordenarUsuariosPorIdade(true);
    listarUsuarios();

}
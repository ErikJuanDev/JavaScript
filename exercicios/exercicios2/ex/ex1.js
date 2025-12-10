// Lista de produtos com quantidade
const produtos = {
  Arroz: 4,
  Feijao: 0,
  Macarrao: 3,
  Vagem: 0,
  Carne: 1
};

function itensEmFalta() {
  for (let produto in produtos) {
    if (produtos[produto] === 0) {
      console.log(`${produto} está em falta!`);
    } else {
      console.log(
        `${produto} ainda tem em estoque (${produtos[produto]} unidades)`
      );
    }
  }
}

itensEmFalta();

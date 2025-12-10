function calcularTotalCompra(nomeProduto, quantidade) {
  const produtos = {
    "Arroz": 7.5,
    "Feijao": 8,
    "Sorvete": 6, 
    "Macarrao": 9,
  }

    const valor = produtos[nomeProduto]
  const valorFinal = valor * quantidade
  
  console.log(valorFinal)
}
calcularTotalCompra("Feijao", 10)
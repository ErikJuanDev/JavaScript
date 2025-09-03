function ValorFinal(produto, quantidade) {
    const listaDeProdutos = {
        'Halls': 2.50,
        'Trident': 2,
        'Fini': 5.50,
    }
    const valor = listaDeProdutos[produto]
    const Total = valor * quantidade
}
console.log(ValorFinal('Halls', 2))

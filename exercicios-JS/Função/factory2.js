function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 4599.99))
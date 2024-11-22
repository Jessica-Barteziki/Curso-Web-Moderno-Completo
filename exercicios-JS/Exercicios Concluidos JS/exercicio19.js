function calcularVenda(condigoProduto, quantidade) {
    switch (condigoProduto) {
        case 100:
            return quantidade * 3
        case 200:            
            return quantidade * 4
            case 300:
                return quantidade * 5.5
                case 400:
                    return quantidade * 7.5
                    case 500:
                        return quantidade * 3.5
                        case 600:
                            return quantidade * 2.8
        }
}

console.log(calcularVenda(100, 5))
console.log(calcularVenda(200, 3))
console.log(calcularVenda(300, 4))
console.log(calcularVenda(400, 1))
console.log(calcularVenda(500, 1))
console.log(calcularVenda(600, 2))
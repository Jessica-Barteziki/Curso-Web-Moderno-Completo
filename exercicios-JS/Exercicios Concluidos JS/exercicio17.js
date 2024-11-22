function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 0.1
        case 'B':
            return salarioAtual * 0.15
        case 'C':
            return salarioAtual * 0.2
        default:
            return -1
    }
}

console.log(calcularReajuste('A', 1000))
console.log(calcularReajuste('B', 1000))
console.log(calcularReajuste('C', 1000))
console.log(calcularReajuste('D', 1000))
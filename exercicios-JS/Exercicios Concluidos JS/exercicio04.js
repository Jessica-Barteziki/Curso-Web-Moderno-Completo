function dividir(dividendo, divisor) {
    const resultadoDivisao = dividendo / divisor
    const restoDivisao = dividendo % divisor

    console.log("Resultado da Divisão ", resultadoDivisao)
    console.log("Resto da Divisão ", restoDivisao)
}

dividir(10, 2)
dividir(10, 3)
dividir(10, 0)
dividir(0, 10)

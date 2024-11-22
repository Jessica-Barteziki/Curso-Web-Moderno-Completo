function classicaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia de útil"
        case 7:
            return "Fim de semana"
        default:
            return "Dia inválido"
    }
}
console.log(classicaDia(3))
console.log(classicaDia(7))
console.log(classicaDia(1))
console.log(classicaDia(8))

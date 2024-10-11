const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback

const notasBaixa2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixa2)

// com callback e arrow
const notasBaixa3 = notas.filter(nota => nota < 7)
console.log(notasBaixa3)

//callback - pode ser utilizada em outros locais dessa forma
const notasMenorQue7 = nota => nota < 7 
const notasBaixa4 = notas.filter(notasMenorQue7) // chamando o callback
console.log(notasBaixa4)
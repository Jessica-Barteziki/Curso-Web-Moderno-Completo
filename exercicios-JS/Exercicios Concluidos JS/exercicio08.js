let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes (stringPontuacoes) {
    pontuacoes = stringPontuacoes.split(", ")
    qtdQuebraDeRecords = 0
    piorJogo = 1
    maiorPontuacao = pontuacoes[0]
    menorPontuacao = pontuacoes[0]

    for (let i = 0; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
            } else if(parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
                menorPontuacao = pontuacoes[i]
                piorJogo = i + 1;
            }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))
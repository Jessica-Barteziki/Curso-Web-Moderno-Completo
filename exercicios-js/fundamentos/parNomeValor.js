//par-chave nome/valor
const saudacao = 'Opa'; // contexto léxico (palavra) 1 (é o contexto onde á variável foi definica fisicamente no código)
function exec() { //contexto diferente - contexto função)
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 85.4,
    endereco: {
        logradouro: 'Rua ABC',
        nmr: 1000,
        bairro: 'Centro'
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);

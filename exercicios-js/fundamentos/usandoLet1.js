let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

//let utiliza a variável primeiro dentro do bloco/escopo/global, caso não encontre ira buscar  de fora, não tem conflitos como o var
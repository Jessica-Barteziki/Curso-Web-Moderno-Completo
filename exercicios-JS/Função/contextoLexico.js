const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//aqui foi explicado que quando executado o exec, minhaFuncao() buscou o const no escopo onde foi criado e não o escopo que foi chamada
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado - que pertence somente a este escopo
    let velocidadeAtual = 0

    //método publico - this responsavel por tornar algo visível fora da função
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
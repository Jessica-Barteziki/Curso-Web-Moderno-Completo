function Carro(velocidadeMaxima = 200, delta = 5) /*parametro principal*/ {
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

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) //chamado 5x

console.log(typeof Carro)
console.log(typeof ferrari)
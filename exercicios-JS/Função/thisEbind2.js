/*exemplo de que o this pode variar por conta do contexto de execução
Será utilizado uma função setInterval*/

function Pessoa () {
    this.idade = 0 

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa 
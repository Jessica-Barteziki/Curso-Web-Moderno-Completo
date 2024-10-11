// => simbolo do arrow

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola!'
}

ola = () => "ola"
ola = _ => 'Ola'

console.log(ola())
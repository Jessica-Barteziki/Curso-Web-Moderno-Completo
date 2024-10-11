// function declaration - independe se a declaração é antes ou depois de ser chamada - muito comum
console.log(soma(3, 4))
function soma(x, y) {
    return x + y
}

//function expression - a função precisa ser chamada depois que ela foi declarada - muito comum
const sub = function (x, y) {
    return x - y
}
console.log(sub(5, 2))

/*named function expression - funciona da mesma forma que a expression, 
a função só pode ser chama após ser declarada - uso reduzido*/
const mult = function mult(x, y){
    return x * y
}
console.log(mult(5,6))
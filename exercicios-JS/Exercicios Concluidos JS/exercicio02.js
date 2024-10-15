function classificarTriangulo(lado1, lado2, lado3) {

    if (lado1 === lado2 && lado2 === lado3) {
        console.log('Este triangulo é Equilatero')
    } else if (lado1 === lado2 || lado2 === 3 || lado3 === lado1) {
        console.log('Este triangulo é Isosceles')
    } else {
        console.log('Este triangulo é Escaleno')
    }
}

classificarTriangulo(2, 2, 2)
classificarTriangulo(4, 5, 6)
classificarTriangulo(4, 4, 5)
// ARMAZENDANDO UMA FUNÇÃO EM UMA VARIAVEL

const imprimirSoma = function (a, b) {
    console.log( a + b )

}

imprimirSoma = (2, 5)

//  ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIAVEL

const soma = (a, b) => {
    return a + b 

}

console.log(soma(2, 8))

// RETORNO IMPLÍCITO

const subtracao = (a, b) => a - b
console.log(subtracao(2, 6))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
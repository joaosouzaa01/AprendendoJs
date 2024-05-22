Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fi 
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('O aluno recebeu Quadro de Honra!')

    } else if (nota.entre(7, 8.99)) {
        console.log('O aluno foi Aprovado!')

    } else if (nota.entre(4, 6.99)) {
        console.log('O aluno esta de Rescuperação')
        
    } else if (nota.entre(0, 3,99)) {
        console.log('O aluno foi Reprovado!')
        
    } else {
        console.log('Nota inválida!')

    }

    console.log('FIM!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.4)
imprimirResultado(-1)
imprimirResultado(11)
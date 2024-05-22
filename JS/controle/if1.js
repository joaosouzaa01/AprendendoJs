function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com '+ nota)

    }
}

soBoaNoticia(9)
soBoaNoticia(6)

function soForVerdadeiroEuFalo(valor) {
    if (valor) {
        console.log('É verdade... '+ valor)
    }
}

soForVerdadeiroEuFalo()
soForVerdadeiroEuFalo(null)
soForVerdadeiroEuFalo(undefined)
soForVerdadeiroEuFalo(NaN)
soForVerdadeiroEuFalo('')
soForVerdadeiroEuFalo(0)
soForVerdadeiroEuFalo(-1)
soForVerdadeiroEuFalo(' ')
soForVerdadeiroEuFalo('?')
soForVerdadeiroEuFalo([])
soForVerdadeiroEuFalo([1, 3])
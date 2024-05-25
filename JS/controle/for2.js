const notas = [ 6.7, 7.4, 9.8, 8.1, 7.8 ] 

for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = { 
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 22,
    peso:67
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
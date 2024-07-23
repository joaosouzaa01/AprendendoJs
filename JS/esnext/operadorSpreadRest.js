// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto

const funcionario = { nome: 'João Victor', salario: 12899.56 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar sperad com array
const grupoA = ['João', 'Maria', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
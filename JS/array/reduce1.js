const alunos = [
  {nome: 'João', nota: 7.4, bolsista: false},
  {nome: 'Luciana', nota: 8.6, bolsista: false},
  {nome: 'Ana Maria', nota: 9.4, bolsista: true},
  {nome: 'Leandro', nota: 9.8, bolsista: true},
  {nome: 'Luiz', nota: 6.8, bolsista: false}
]

console.log(alunos.map(map => map.nota))
const result = alunos.map(map => map.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0 // VALOR INICIAL 
)

console.log(result)

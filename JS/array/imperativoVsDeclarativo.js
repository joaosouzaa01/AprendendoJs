const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 8.9 }
]

// IMPERATIVO
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}
console.log(total1 / alunos.length)
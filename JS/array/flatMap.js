const escola = [{
  noma: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.7
  }, {
    nome: 'Henrique',
    nota: 7.8
  }, {
    nome: 'Agatha',
    nota: 9.4
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Alice',
    nota: 5.7
  }, {
    nome: 'Luiz',
    nota: 8.4
  }, {
    nome: 'Kauã',
    nota: 8.7
  }]
}] 


const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
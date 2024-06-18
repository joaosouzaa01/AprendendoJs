const alunos = [
  {nome: 'João', nota: 7.4, bolsista: false},
  {nome: 'Luciana', nota: 8.6, bolsista: false},
  {nome: 'Ana Maria', nota: 9.4, bolsista: true},
  {nome: 'Leandro', nota: 9.8, bolsista: true},
  {nome: 'Luiz', nota: 6.8, bolsista: false}
]

// MEU JEITO DE RESOLVER
  // DESAFIO 1: TODOS OS ALUNOS SÃO BOLSISTAS ?
  const todosSaoBolsistas = alunos.every(alunos => alunos.bolsista);
  console.log(todosSaoBolsistas);

  // DESAFIO 2: ALGUM ALUNO É BOLSISTA ?

  const algumEhBolsista = alunos.some(aluno => aluno.bolsista);
  console.log(algumEhBolsista);

//JEITO FEITO NA AULA 
  // DESAFIO 1: TODOS OS ALUNOS SÃO BOLSISTAS ?
  const todosBolsistas = (resultado, bolsista) => resultado && bolsista
  console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
  
  // DESAFIO 1: TODOS OS ALUNOS SÃO BOLSISTAS ?
  const algumBolsista = (resultado, bolsista) => resultado || bolsista
  console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))






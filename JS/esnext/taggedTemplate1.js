// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(valores)
  console.log(partes)
  return 'Outra String'
}

const aluno = "Junin"
const situacao = 'Aprovado'
console.log(tag`${aluno} esta ${situacao}`)
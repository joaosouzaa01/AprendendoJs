const { error } = require('console')
const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.2
}
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})
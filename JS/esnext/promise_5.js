const { reject } = require("lodash");

function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceDeErro) {
      reject('Ocorreu um erro!')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.3)
  .then(v => console.log()`Valor: ${v}`)
  .then(
    v => console.log(v),
    err => console.log(`Erro esp. : ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim!'))

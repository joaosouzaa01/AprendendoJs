setTimeout(function () {
  console.log('Executando a primiera callback...')

  setTimeout(function () {
    console.log('Executando a segunda callback...')

    setTimeout(function () {
      console.log('Execuntando a terceira callback...')
    }, 2000)
  }, 2000)
}, 2000)

// USANDO PROMISE
function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)
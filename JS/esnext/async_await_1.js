function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

esperarPor(2000)
  .then(() => console.log('Executando promise 1 ...'))
  .then(() => console.log('Executando promise 2 ...'))
  .then(() => console.log('Executando promise 3 ...'))
  .then(() => console.log('Executando promise 4 ...'))
  .then(() => console.log('Executando promise 5 ...'))
  
  
function retornarvalor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

function retornarvalorRapido() {
  return 20
}

async function executar() {
  let valor = await retornarvalorRapido()

  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

executar()
  .then(console.log)
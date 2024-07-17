const anonimo = process.argv.indexOf('-a') !== -1
// CONSOLE.LOG(ANONIMO)

if(anonimo) {
  process.stdout.write('Informe o seu Nome: ')
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  })
}
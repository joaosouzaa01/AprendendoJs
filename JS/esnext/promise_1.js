let a = 1
console.log(a) 

function primeiroElemento(array) {
  return array[0]
}
 
const primeiraLetra = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase() 

new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos'])
}).then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  // .then(v => console.log(v))
  .then(console.log)
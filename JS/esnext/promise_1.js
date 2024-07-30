let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3)
  cumprirPromessa(['Ana', 'Bia', 'Carlos'])
})

// console.log(typeof p)

p
  .then(valor => console.log(valor))
  .then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLoweCase())
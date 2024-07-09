console.log(this === global)
console.log(this === moudule)

console.log(this === moudule.exports)
console.log(this === exports)

function logThis() {
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === moudule.exports)
  console.log(this == global)
}

logThis()

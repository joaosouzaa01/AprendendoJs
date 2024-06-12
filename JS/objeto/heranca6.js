function Aula(nome, videoId) {
  this.nome = nome
  this.videoId = videoId 
}

const aula1 = new Aula('Bem Vindo!' , 123)
const videoId = new Aula('Até Breve!' , 456)
console.log(aula1, aula2)

// SIMULANDO O NEW

function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}
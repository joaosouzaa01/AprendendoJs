Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 5199, fragil: true },
  { nome: 'Copo de Vidro', preco: 15.5, fragil: true },
  { nome: 'Copo de Plástico', preco: 19.1, fragil: false },
]

console.log(produtos.filter(function (p) {
  return p.preco > 2400
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter(fragil))

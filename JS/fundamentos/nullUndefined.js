let valor // NÃO INICIALIZADA
console.log(valor)

valor = null // AUSÊNCIA DE VALOR
console.log(valor)
//console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // SEM PREÇO
console.log(!!produto.preco)
console.log(produto)




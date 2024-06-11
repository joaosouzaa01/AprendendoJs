// CADEIA DE PROTÓTIPOS (prototype chain)

Object.prototype.attr0 = '0' // NÃO FAÇA ISSO ME CASA!
// ISSO IMPACTA EM TODOS OS OBJETOS CRIADOS

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // O RESULTADO 3 SÓ SERÁ USADO CASO A VARIAVEL DE RESULTADO C N EXISTA
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this, this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 334 // Shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
console.log(volvo.status())

volvo.acelerarMais(234)
console.log(ferrari.status())
//CLASS
class Pessoa {
    constructor(nome) {
        this.nome = nome

    }
    falar() {
    console.log(`Meu nome é ${this.nome}`)
    }
}

//FACTORY
const p1 = new Pessoa ('João') 
p1.falar

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa(`Joãozin`)
p2.falar



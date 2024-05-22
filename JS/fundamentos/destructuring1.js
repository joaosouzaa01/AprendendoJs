// NOVO RECURSO DO ES2015

const pessoa = {
    nome: 'Ana',
    idade: 6, 
    endereco: {
        logradouro: 'Rua npx',
        numero: '18'
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i } =  pessoa
console.log(n, 1)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log( logradouro, numero, cep)

const { conta: {ag, num } } = pessoa 
console.log(ag, num)
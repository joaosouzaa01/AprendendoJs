// PAR NOME/VALOR

const saudacao = 'Opa' // CONTEXTO LÉXICO 1 

function exec() {
    const saudacao = 'Falaa' // CONTEXTO LÉXICO 2
}

//OBJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR

const cliente = {
    nome: 'Pedro',
    idade: 23,
    peso: 92,
    endereco: {
        logradouro: 'Rua abcde',
        numero: 1234
    }
}

console.log (saudacao)
console.log(exec())
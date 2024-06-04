// COLEÇÃO DINÂMICA DE PARES CHAVE/VALOR  
    const produto = new Object
    produto.nome = 'Cadeira'
    produto['Marca X'] = 'Generica'
    produto.preco = 250

    console.log(produto)
    delete produto.preco
    delete produto['Marca X']
    console.log(produto)
    
    const carro = {
        modelo: 'A5',
        valor: 110000,
        proprietario: {
            nome: João,
            idade: 23,
            endereco: {
                logradouro: 'Rua abc',
                numero: 123
            }
        },
        condutores: [{
            nome: 'Junior',
            idade: 18
        }, {
            nome: 'Ana',
            idade: 57
        }],
    
        calcularValorSeguro: function() {
            // ...
        }
    }

    carro.proprietario.endereco.numero = 1000
    carro['proprietario']['endereco']['logradouro']
    console.log(carro)

    delete carro.condutores
    delete carro.proprietario
    delete carro.calcularValorSeguro

    console.log(carro)
    console.log(carro.condutores)
    console.log(carro.condutores.length)

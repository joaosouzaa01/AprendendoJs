// MANEIRAS DE CRIAR OBJETO

    // Usando a notação literal

        const obj = {}
        console.log(obj)

    // Objeto em JS - Usando o operador NEW

        console.log(typeof Object, typeof new Object)
        const obj2 = new Object
        console.log(obj2)

    // Funções construtoras

        function Produto(nome, preco, desc) {

            this.nome = nome
            this.getPrecoComDesconto = () => {
                return preco * (1 - desc)

            }
        }

        const p1 = new Produto('Caneta', 7.99, 0.16)
        const p2 = new Produto('Notebook', 2998.00, 0.26)
        console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

    // Função Factory

    function criarFuncionario(nome, salarioBase, faltas) {
        return {
            nome,
            salarioBase,
            faltas,
            getSalario() {
                return (salarioBase / 30) * (30 - faltas)
            }
        }
    }

    const f1 = criarFuncionario ('João', 7989, 4)
    const f2 = criarFuncionario ('Luiz', 11989, 2)
    console.log(f1.getSalario(), f2.getSalario())

    //Object.create 
    const filha = Object.create(null)
    filha.nome ='Ana'
    console.log(filha)

    //Uma função famosa que retorna Objeto...
    const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
    console.log(fromJSON.info)
    
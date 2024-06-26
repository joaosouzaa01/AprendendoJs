//FUNÇÃO EM JS É FIRST-CLASS Objetc (citizens)
//Higher-order function

//Criar de forma Literal

function fun1() {}

//Armazenar em uma variável
const fun2 = function () {}

//Armazenar em um Array
const Array = [function (a, b) { return a + b }, fun1, fun2]
console.log(Array[0](2, 3))

//Armazenar em um atributo de Objeto
const obj = {}
obj.falar = function () {return "Opa!"}
console.log(obj.falar())

//Passar função como param
function run(fun){
    fun()
}

run(function () { console.log('Executando...') })

//Uma Função pode retornar/ conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
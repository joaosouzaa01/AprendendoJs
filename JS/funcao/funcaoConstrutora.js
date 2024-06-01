function Carro(velocidadeMaxima = 200, delta = 5) {
    //ATRIBUTO PRIVADO
    let velocidadeAtual = 0

    //MÉTODO PÚBLICO
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //MÉTODO PÚBLICO
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const golf = new Carro 
golf.acelerar()
console.log(golf.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar
ferrari.acelerar
ferrari.acelerar
ferrari.acelerar
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // FUNCTION    
console.log(typeof ferrari) // OBJETO
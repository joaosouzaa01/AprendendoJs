const sequencia = {
    _valor: 1, // CONVENÇÃO, VARIAVEL INTERNA
    get valor () {return this._valor++},
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 800

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 600
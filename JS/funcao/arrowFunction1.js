let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // RETURN ESTÁ IMPLÍCITO
    console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!' // POSSUI UM PARAMENTRO '_' O UNDERLINE
console.log(ola())
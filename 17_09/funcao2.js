//Parametros e retornos são opcionais
function area(altura, largura) {
    //tratando os parâmetros da função
    if (isNaN(largura)) {
        largura = 0
    }

    //Operador ternário
    altura = (isNaN(altura)) ? 0 : altura
    return altura * largura
}

//console.log(area(NaN, NaN))

const soma = function () {
    let sum = 0
    for (let i in arguments) {
        sum += arguments[i]
    }
    return sum
}

const obj = {
    nome: "Madalena",
    nota: 10,
    isStudent: true
}

for (let i in obj) {
    console.log(obj[i])
}

let vetor = [10, 20, 30, 40, 50]
for (let i in vetor) {
    console.log(vetor[i])
}

console.log(soma(1, 2, 3, 4, 5, 6))

const multiplicacao = function (...operandos) {
    console.log(operandos)
}

multiplicacao("y", "x", 1, 2, 3, 4, 5)
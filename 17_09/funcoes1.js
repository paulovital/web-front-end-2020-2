//Sintaxe literal
function func1() { }

//Armazenar uma função em uma variável
const func2 = function () { }
func2()

//Armazenar função dentro de array (vetor e de matriz)
const array = [1, 2, 3, 4, 5, "João", function () { }]
array[6]

//Função como atributo de objeto
const obj = {}
obj.func3 = function () {
    return 2
}

//Uma variável pode receber uma função (nesse caso passe só o nome da função)
let func4 = obj.func3

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

//Uma função pode ser passada pra outra por parâmetro
function calculo(a, b, operacao) {
    return operacao(a, b)
}


console.log(calculo(2, 3, function (x, y) {
    return x * y
}))

//Função pode ser retornada por outra função
function sum(z, m) {
    return function (y) {
        return z + m + y
    }
}

const somaFinal = sum(2, 3)
console.log(somaFinal(4))
const print = v => {
    console.log((!v) ? '' : v)
}
let numeros = [10, 20, 30, 40]

for (let i = 0; i < numeros.length; i++) {
    //print(numeros[i])
}

for (let i in numeros) {
    //print(numeros[i])
}

numeros.forEach(e => e)

//MAP
const triplo = num => num * 3
let novoVetor = numeros.map((e) => e * 3)
print(novoVetor)

//FILTER
let novoVetor2 = numeros.filter(function (elem) {
    return elem >= 30
})

print(novoVetor2)

let sum = numeros.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual
})

console.log(sum)





const Produto = {
    nome: "Sabonete",
    preco: 1.5,
    desconto: function () {
        return 0
    }
}

class Pessoa {
    constructor(nome, idade) {
        this.name = nome
        this.age = idade
    }
}

function Carro(m, p) {
    this.marca = "Fiat"
    this.preco = 23000
    this.devolvePreco = function () {
        return this.preco
    }
}

let carro1 = new Carro("Fiat", 23000)
let carro2 = new Carro("Ford", 34000)

console.log(carro1.marca, carro2.marca)
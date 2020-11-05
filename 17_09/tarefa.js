const musicas = [
    { musica: "Ordinary Love", artista: "U2", midia: "CD", preco: 12.99, is80s: false },
    { musica: "Girls just wanna have fun", artista: "Cindy Lauper", midia: "Online", preco: 32.67, is80s: true },
    { musica: "I wanna be your lover", artista: "Labionda", midia: "Online", preco: 56.90, is80s: false },
    { musica: "Eyes without a face", artista: "Billy Idol", midia: "CD", preco: 13.60, is80s: true },
    { musica: "I wont let you down", artista: "P.H.D", midia: "DVD", preco: 39.59, is80s: true }
]

// 1 - Devolver todas as musicas que são dos anos 80
const ehDosAnos80 = elemento => elemento.is80s
const musicasDosAnos80 = musicas.filter(ehDosAnos80)

// 2 - Devolver todos os precos com desconto de 10%
const precoComDesconto = elemento => parseFloat((elemento.preco * 0.9).toFixed(2))
const precosComDesconto = musicas.map(precoComDesconto)
//console.log(precosComDesconto)

// 3 - Devolver a somatória de todos os precos
const somaDosPrecos = musicas.reduce(function (acumulador, elemento) {
    acumulador = (typeof acumulador === 'object') ? acumulador.preco : acumulador
    return acumulador + elemento.preco
})

//console.log(somaDosPrecos)

// 4 - Devolver os artistas que não são dos anos 80
const artistas = elemento => elemento.artista

const artistasNaoDosAnos80 = musicas.filter(elemento => !elemento.is80s).map(artistas)
console.log(artistasNaoDosAnos80)

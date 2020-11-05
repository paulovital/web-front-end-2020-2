const livros = [
    { titulo: "O Senhor dos Anéis: A sociedade do anel", autor: "J. R. R. Tolkien", genero: "fantasia", preco: 34.55, qtdEstoque: 30, precoCusto: 13.90, hasEbook: true },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "romance", preco: 12.99, qtdEstoque: 7, precoCusto: 5.40, hasEbook: true },
    { titulo: "As crônicas de Nárnia: O leão, a feiticeira e o guarda-roupas", autor: "C. S. Lewis", genero: "fantasia", preco: 18.8, qtdEstoque: 12, precoCusto: 8.56, hasEbook: true },
    { titulo: "Harry Potter e o prisioneiro de Azkaban", autor: "J. K. Rowling", genero: "fantasia", preco: 47.99, qtdEstoque: 14, precoCusto: 28.70, hasEbook: false },
    { titulo: "Razão e Sensibilidade", autor: "Jane Austen", genero: "romance", preco: 12.99, qtdEstoque: 5, precoCusto: 5.40, hasEbook: false },
    { titulo: "Lady Susan", autor: "Jane Austen", genero: "romance", preco: 18.97, qtdEstoque: 6, precoCusto: 10.58, hasEbook: true },
    { titulo: "A Dança da Morte", autor: "Stephen King", genero: "terror", preco: 25.99, qtdEstoque: 10, precoCusto: 15.79, hasEbook: false },
    { titulo: "Psicose", autor: "Robert Bloch", genero: "terror", preco: 41.99, qtdEstoque: 17, precoCusto: 25.78, hasEbook: false },
]

/*
    1- Uma listagem dos livros
    2 - Uma listagem dos livros com preço com desconto.
    3 - O lucro obtido pela livraria caso venda todos os livros de fantasia e terror.
    4 - A lista de todos os livros que possuem uma versão em ebook disponível
    5 - Todos os livros da Jane Austen com reajuste de 30%
    6 - Todos os autores (sem repetições) | Use a função reduce
*/

// 1 questão
//livros.forEach((livro) => console.log(livro.titulo))

// 2 questão
//livros.forEach((livro) => console.log(livro.titulo + ": R$" + (livro.preco * 0.8).toFixed(2)))

//3 questão
const livrosDeTerrorEFantasia = livros.filter((livro) => livro.genero === 'fantasia' || livro.genero === 'terror')
const lucro = livrosDeTerrorEFantasia.reduce((acumulador, valorAtual) => {
    return acumulador + ((valorAtual.preco - valorAtual.precoCusto) * valorAtual.qtdEstoque)
}, 0)

//console.log(lucro)

//4 questão
// livros.forEach((livro) => {
//     if (livro.hasEbook) console.log(livro.titulo)
// })

//5 questao
const livrosJaneAusten = livros.filter((livro) => {
    return livro.autor === "Jane Austen"
}).map((livro) => {
    return { titulo: livro.titulo, preco: parseFloat((livro.preco * 1.3).toFixed(2)) }
})

//console.log(livrosJaneAusten)

//6 questao
const autores = livros.reduce((acumulador, livro) => {
    if (acumulador.indexOf(livro.autor) < 0) {
        acumulador.push(livro.autor)
    }
    return acumulador
}, [])

/* Este código é necessário para resolver às questões de 1 a 6.
 * Você pode escrever sua resposta aqui mesmo, neste arquivo, sem que precise criar outro.
 * Ao finalizar, junte todos os arquivos gerados em uma pasta compactada e entregue através do Ambiente Virtual. 
 */

let estoque = [
    { nome: "Iogurte Betânia", preco: 1.79, categoria: 'laticínios', perecivel: true, qtdEstoque: 20, precoDeCusto: 0.75 },
    { nome: "Fralda Descartável Mamy Poko", preco: 22.99, categoria: 'bebês', perecivel: false, qtdEstoque: 18, precoDeCusto: 13.45 },
    { nome: "Papel Higiênico Floral", preco: 5.59, categoria: 'higiene', perecivel: false, qtdEstoque: 45, precoDeCusto: 2.29 },
    { nome: "Cotonete Johnson", preco: 4.69, categoria: 'higiene', perecivel: false, qtdEstoque: 21, precoDeCusto: 1.86 },
    { nome: "Chocolate Snickers", preco: 2.89, categoria: 'doces', perecivel: true, qtdEstoque: 157, precoDeCusto: 0.75 },
    { nome: "Empanado de Frango Sadia", preco: 9.49, categoria: 'frios', perecivel: true, qtdEstoque: 16, precoDeCusto: 4.87 },
    { nome: "Queijo Prato Sadia", preco: 11.69, categoria: 'frios', perecivel: true, qtdEstoque: 0, precoDeCusto: 6.75 },
    { nome: "Iogurte Activia Ameixa", preco: 10.29, categoria: 'laticínios', perecivel: true, qtdEstoque: 24, precoDeCusto: 5.29 },
    { nome: "Creme para pentear Dove", preco: 16.99, categoria: 'perfumaria', perecivel: false, qtdEstoque: 5, precoDeCusto: 10.79 },
    { nome: "Shampoo Clear Anticaspa", preco: 14.99, categoria: 'perfumaria', perecivel: false, qtdEstoque: 20, precoDeCusto: 8.88 },
    { nome: "Leite Fermentado Chamyto", preco: 6.89, categoria: 'laticínios', perecivel: true, qtdEstoque: 7, precoDeCusto: 3.75 },
    { nome: "Arroz Branco Camil", preco: 5.79, categoria: 'cereais', perecivel: false, qtdEstoque: 80, precoDeCusto: 3.70 },
    { nome: "Feijão Carioca Precioso", preco: 7.29, categoria: 'cereais', perecivel: false, qtdEstoque: 55, precoDeCusto: 4.89 },
    { nome: "Pastilha Mentos Morango", preco: 2.19, categoria: 'doces', perecivel: false, qtdEstoque: 0, precoDeCusto: 0.78 },
    { nome: "Escova Dental Colgate", preco: 17.69, categoria: 'higiene', perecivel: false, qtdEstoque: 15, precoDeCusto: 8.40 },
]

/////////     Responda aqui as questões de 1 a 5     ////////////////






// Extraindo os nomes das categorias do supermercado (tirando as repetições)
let categoriasDoSupermercado = estoque.reduce(function (categorias, produto) {
    if(categorias.indexOf(produto.categoria) === -1){
        categorias.push(produto.categoria)
    }
    return categorias
}, []);

console.log(categoriasDoSupermercado)


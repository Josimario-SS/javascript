const getLivrosAPI = async function() {
    let url = 'https://projeto-livraria-latx.onrender.com/v2/livraria/livro';

    let response = await fetch(url);

    let dados = await response.json();

    return dados;
}

// CRIAR CARDS
const setCardLivros = async function() {
    let listaLivros = await getLivrosAPI();
    let cardProdutos = document.getElementById('cardProdutos');
    //console.log(listaLivros);

    //PERCORRER ARRAY 'BOOKS'
    listaLivros.books.forEach(function(item) {
        let caixa_produto = document.createElement('div');
        let h2 = document.createElement('h2');
        let figure = document.createElement('figure');
        let img = document.createElement('img');

        caixa_produto.setAttribute('class', 'caixa_produto');
        h2.setAttribute('class', 'caixa_titulo');
        figure.setAttribute('class', 'caixa_imagem');
        img.setAttribute('src', item.image);

        h2.innerHTML = item.title;

        cardProdutos.appendChild(caixa_produto);
        caixa_produto.appendChild(h2);
        caixa_produto.appendChild(figure);
        figure.appendChild(img);
        
    });
}

window.addEventListener('load', async function() {
    setCardLivros()
});
function Multiplicar() {
    
    // Declaração das variáveis
    let numero = document.getElementById('numero');
    let resultado = document.getElementById('resultado');

    // Pega o valor (value) que está no campo do imput naquele momento.
    let num = numero.value;

    // Verifica se a variável num está vazia, se sim retorna uma mensagem.
    if (num === '') { 
        resultado.innerHTML = 'Por favor, insira um número.';
    }
    // Verifica se o número que foi digitado está entre 0 e 10, se não retorna uma mensagem.
    else if (num < 0 || num > 10) {
        resultado.innerHTML = 'Por favor, insira um número entre 0 e 10.';
    }
    // Se nenhuma das opções acima for verdadeira o cálculo é feito e retornado na tela.
    else {
        let tabuada = '';
        for (let i = 0; i <= 10; i++) {
            tabuada += `${num} × ${i} = ${num * i}<br>`;
        }
        resultado.innerHTML = tabuada;
    }
}

// Função para limpar os dados da tela e do campo imput.
function Limpar() {
    numero.value = '';
    resultado.innerHTML = '';
}
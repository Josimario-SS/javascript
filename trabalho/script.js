let numero = document.getElementById('numero');
let resultado = document.getElementById('resultado');

function Multiplicar() {

    let numero = document.getElementById('numero');
    let resultado = document.getElementById('resultado');

    let num = numero.value;
    if (num === '') {
        resultado.innerHTML = 'Por favor, insira um número.';
    }
    else if (num < 0 || num > 10) {
        resultado.innerHTML = 'Por favor, insira um número entre 0 e 10.';
    }
    else {
        let tabuada = '';
        for (let i = 0; i <= 10; i++) {
            tabuada += `${num} × ${i} = ${num * i}<br>`;
        }
        resultado.innerHTML = tabuada;
    }
}

function Limpar() {
    numero.value = '';
    resultado.innerHTML = '';
}
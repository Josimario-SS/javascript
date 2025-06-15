let numero = document.getElementById("txtnumero").value;
let resposta = document.getElementById("resposta");
let resultado = document.getElementById("resultado");
let valores = [];



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function Adicionar() {
    if (isNumero(numero) && !inLista(numero, valores)) {// Verifica se o número é válido e não está na lista
    // Adiciona o número ao array
        valores.push(Number(numero));

        let item = document.createElement("option");
        item.text = `Valor ${numero} adicionado.`;
        resposta.appendChild(item); // Adiciona o item à lista de respostas
    } else { 
        alert("Valor inválido ou já encontrado na lista.");
    }

    numero = ''; // Limpa o campo de entrada
    numero.focus(); // Foca no campo de entrada para o próximo número
    
} 


function Finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!");
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        // Encontra o maior e o menor valor
        for (let pos in valores) {
            soma += valores[pos]; // Soma os valores
            media = soma / total; // Calcula a média
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma / total; // Calcula a média
        // Exibe os resultados

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resultado.innerHTML += `<p>A soma dos valores é ${soma}.</p>`; 
        resultado.innerHTML += `<p>A média dos valores é ${media}.</p>`;
        resposta.innerHTML = ''; // Limpa a lista de respostas
        valores = []; // Limpa o array de valores
        numero = ''; // Limpa o campo de entrada
        numero.focus(); // Foca no campo de entrada para o próximo número
    }
}
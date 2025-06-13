/* O contador irá ter que contar desde o número especificado na caixa "Início" e ir até o número que tiver na caixa "Fim" de acordo com o passo que for passado, ou seja, se INICIO == 0 E FIM == 10 E PASSO == 1, O CONTADOR == 1, 2, 3,... ATÉ O NÚMERO 10.*/ 



function Contar(){
    // Obtém os elementos do HTML pelos seus IDs
    // e armazena os valores em variáveis
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let contador = document.getElementById('contador');

    
    // Verifica se os campos estão preenchidos
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERROR! Preencha todos os campos!');
        contador.innerHTML = "Impossível contar!";
        return;
    }

    // Verifica se o passo é maior que zero
    if (Number(passo.value) <= 0) {
        alert('ERROR! O passo deve ser maior que zero!');
        contador.innerHTML = "Impossível contar!";
        return;
    }

    // Verifica se o início é maior que o fim
    if (Number(inicio.value) > Number(fim.value)) {
        alert('ERROR! O início não pode ser maior que o fim!');
        contador.innerHTML = "Impossível contar!";
        return;
    }

    // Se tudo estiver correto, faz a contagem
    contador.innerHTML = '';
    let ini = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    for (let c = ini; c <= f; c += p) {
        contador.innerHTML += `${c} \u{1F449} `;
    }
    contador.innerHTML += `\u{1F3C1}`; // Adiciona o emoji de bandeira de chegada
    

    
}

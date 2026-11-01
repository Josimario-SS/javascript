// Definição das variáaveis
const pedra = document.getElementById('opc1');
const papel = document.getElementById('opc2');
const tesoura = document.getElementById('opc3');
let img_jogador = document.getElementById('imagem_jogador');
let img_comp = document.getElementById('imagem_com');
let resultado = document.getElementById('resultado');
let btn_playAgain = document.getElementById('jogar_nova');
let dis_img_user = document.querySelector('.img_user');
let dis_img_com = document.querySelector('.img_com');
let dis_vs = document.getElementById('vs');
let contador = document.querySelector('.cont_jokenpo');

// Faz o retorno da escolha aleatória do computador entre 1 e 3.
function escolhaComputador() {
    return Math.floor(Math.random() * 3) + 1;
}
// Função para fazer as imagens e o botão aparecer na tela 
function displayBlock() {
    dis_img_com.style.display = 'block';
    dis_img_user.style.display = 'block';
    dis_vs.style.display = 'block';
    btn_playAgain.style.display = 'block';
}
// Verifica se o jogo está ativo
let jogo_ativo = true;
// Evento para quando o jogador escolher a opção "pedra"
pedra.addEventListener('click', () => {
    // Se o jogo estiver ativo a jogada pode ser feita. 
    if (jogo_ativo == true) {
        jogo_ativo = false; // Essa condição limita que o jogador clique várias vezes em qualquer uma das opções, evitando bugs ou erros. Após o clique em uma das opções o jogo que estava estava ativo agora se torna falso, ou inativo até que o botão jogar novamente seja clicado, resetando o jogo.

        // Faz uma pequena contagem com a palavra Jokenpô aparecendo dividida na tela com 1s entre elas, dando mais a dinâmica do jogo real. 
        contador.style.display = 'block';
        contador.innerText = 'Jo...';
        setTimeout(() => {
            contador.innerText = 'Ken...';
        }, 1000);
        setTimeout(() => {
            contador.innerText = 'Pô!';
        }, 2000);
        setTimeout (() => {
        contador.style.display = 'none';
            // Quando o evento é disparado a variável jogador recebe um número, sendo 1 para pedra, 2 para papel e 3 para tesoura. Esses números são necessários para a comparação entre a opção do jogador e a escolha do computador que também retorna um número inteiro entre 1 e 3.
            let jogador = 1;
            let num_aleatorio = escolhaComputador();
            
            // Se a escolha do jogador for igual a do computador (pedra e pedra).
            if (jogador == num_aleatorio) {
                // As variáveis recebem os caminhos das imagens
                img_jogador.src = 'img/Pedra.png';
                img_comp.src = 'img/Pedra.png';
                // A frase de empate vai ser apresentada
                resultado.innerText = 'Empate!';
                resultado.id = 'resultado_empate';
                resultado.style.display = 'block';
            }
            // Se a escolha for diferente do da computador (pedra e papel).
            if ((jogador != num_aleatorio) && (num_aleatorio == 2)) {
                // As variáveis recebem os caminhos das imagens
                img_jogador.src = 'img/Pedra.png';
                img_comp.src = 'img/Papel.png';
                // A frase de derrota será apresentada na tela.
                resultado.innerText = 'Boa sorte na próxima!';
                resultado.id = 'resultado_loser';
                resultado.style.display = 'block';
            }
            // Se a escolha for diferente do da computador (pedra e tesoura).
            if ((jogador != num_aleatorio) && (num_aleatorio == 3)) {
                // As variáveis recebem os caminhos das imagens
                img_jogador.src = 'img/Pedra.png';
                img_comp.src = 'img/Tesoura.png';
                // A frase de vitória será apresentada na tela
                resultado.innerText = 'Parabéns! Você venceu!';
                resultado.id = 'resultado_win';
                resultado.style.display = 'block';
                
            }
            // Chamada da função para as imagens aparecerem na tela.
            displayBlock();
            
        }, 3000);
    }
    // Se essa opção ou qualquer uma das outras for clicada duas vezes ou nais um alert vai aparecer.
    else {
        alert("Clique em jogar novamente!")
    }
});

papel.addEventListener('click', () => {
    if (jogo_ativo == true) {
        jogo_ativo = false;

        contador.style.display = 'block';
        contador.innerText = 'Jo...';
        setTimeout(() => {
            contador.innerText = 'Ken...';
        }, 1000);
        setTimeout(() => {
            contador.innerText = 'Pô!';
        }, 2000);
        setTimeout(() => {
            contador.style.display = 'none';
            let jogador = 2;
            let num_aleatorio = escolhaComputador();
            
            if (jogador == num_aleatorio) {
                
                img_jogador.src = 'img/Papel.png';
                img_comp.src = 'img/Papel.png';
                
                resultado.innerText = 'Empate!';
                resultado.id = 'resultado_empate';
                resultado.style.display = 'block';
            }
            if ((jogador != num_aleatorio) && (num_aleatorio == 1)) {
                img_jogador.src = 'img/Papel.png';
                img_comp.src = 'img/Pedra.png';
                
                resultado.innerText = 'Parabéns! Você venceu!';
                resultado.id = 'resultado_win';
                resultado.style.display = 'block';
            }
            if ((jogador != num_aleatorio) && (num_aleatorio == 3)) {
                img_jogador.src = 'img/Papel.png';
                img_comp.src = 'img/Tesoura.png';
                
                resultado.innerText = 'Boa sorte na próxima!';
                resultado.id = 'resultado_loser';
                resultado.style.display = 'block';
            }
            displayBlock();
            
        }, 3000);
    }
    else {
        alert("Clique em jogar novamente!")
    }
});

tesoura.addEventListener('click', () => {
    if (jogo_ativo == true) {
        jogo_ativo = false;
        contador.style.display = 'block';
        contador.innerText = 'Jo...';
        setTimeout(() => {
            contador.innerText = 'Ken...';
        }, 1000);
        setTimeout(() => {
            contador.innerText = 'Pô!';
        }, 2000);
        setTimeout(() => {
            contador.style.display = 'none';
            let jogador = 3;
            let num_aleatorio = escolhaComputador();

            if (jogador == num_aleatorio) {
                img_jogador.src = 'img/Tesoura.png';
                img_comp.src = 'img/Tesoura.png';

                resultado.innerText = 'Empate!';
                resultado.id = 'resultado_empate';
                resultado.style.display = 'block';
            }
            if ((jogador != num_aleatorio) && (num_aleatorio == 1)) {
                img_jogador.src = 'img/Tesoura.png';
                img_comp.src = 'img/Pedra.png';

                resultado.innerText = 'Boa sorte na próxima!';
                resultado.id = 'resultado_loser';
                resultado.style.display = 'block';
            }
            if ((jogador != num_aleatorio) && (num_aleatorio == 2)) {
                img_jogador.src = 'img/Tesoura.png';
                img_comp.src = 'img/Papel.png';
                
                resultado.innerText = 'Parabéns! Você venceu!';
                resultado.id = 'resultado_win';
                resultado.style.display = 'block';
            }
            displayBlock();
        }, 3000);
    }
    else {
        alert("Clique em jogar novamente!")
    }
});
    
// Botão para resetar o jogo.
btn_playAgain.addEventListener('click', function() {
    jogo_ativo = true;

    dis_img_com.style.display = 'none';
    dis_img_user.style.display = 'none';
    dis_vs.style.display = 'none';
    btn_playAgain.style.display = 'none';
    resultado.style.display = 'none';
    resultado.id = 'resultado';
});

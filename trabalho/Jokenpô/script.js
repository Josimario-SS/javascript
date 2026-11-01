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
// alert(escolhaComputador());

function displayNone() {
    dis_img_com.style.display = 'block';
    dis_img_user.style.display = 'block';
    dis_vs.style.display = 'block';
    btn_playAgain.style.display = 'block';
}

// Se o jogador clicar em alguma das opções (Pedra, Papel ou Tesoura)
let jogo_ativo = true;
pedra.addEventListener('click', () => {

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
        setTimeout (() => {
        contador.style.display = 'none';
            let jogador = 1;
            let num_aleatorio = escolhaComputador();
            
            if (jogador == num_aleatorio) {
                img_jogador.src = 'img/Pedra.png';
                img_comp.src = 'img/Pedra.png';
                
                resultado.innerText = 'Empate!';
                resultado.id = 'resultado_empate';
                resultado.style.display = 'block';
            }
            if ((jogador != num_aleatorio) && (num_aleatorio == 2)) {
                img_jogador.src = 'img/Pedra.png';
                img_comp.src = 'img/Papel.png';
                
                resultado.innerText = 'Boa sorte na próxima!';
                resultado.id = 'resultado_loser';
                resultado.style.display = 'block';
            }
            if ((jogador != num_aleatorio) && (num_aleatorio == 3)) {
                img_jogador.src = 'img/Pedra.png';
                img_comp.src = 'img/Tesoura.png';
                
                resultado.innerText = 'Parabéns! Você venceu!';
                resultado.id = 'resultado_win';
                resultado.style.display = 'block';
                
            }
            displayNone();
            
        
        }, 3000);
    }
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
            displayNone();
            
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
            displayNone();
        }, 3000);
    }
    else {
        alert("Clique em jogar novamente!")
    }
});
    

btn_playAgain.addEventListener('click', function() {
    jogo_ativo = true;

    dis_img_com.style.display = 'none';
    dis_img_user.style.display = 'none';
    dis_vs.style.display = 'none';
    btn_playAgain.style.display = 'none';
    resultado.style.display = 'none';
    resultado.id = 'resultado';
});

function Horario() {
    /*TRANSFORMA OS IDs DO HTML EM UMA VARIAVEL */
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');

    /* CRIA UMA VARIAVEL DATA QUE RECEBE A DATA ATUAL DO SISTEMA */
    let data = new Date();
    /* Pega a hora atual do sistema */
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    /* CONDIÇÕES PARA VERIFICAR O HORÁRIO E MUDAR A IMAGEM E O BACKGROUND DO BODY */
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manha.png';
        document.body.style.background = "#e2cd9f";
    }

    else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'img/tarde.png';
        document.body.style.background = "#b9846f";
    } else {
        // Boa noite
        img.src = 'img/noite.png';
        document.body.style.background = "#515154";
    }
}
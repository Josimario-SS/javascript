function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }

    else {
        let fsex = document.getElementsByName('radsex');
        let idade = anoAtual - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/img-garoto.png');
            } else if (idade < 25) {
                img.setAttribute('src', 'img/img_homem-jovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/img_homem-midade.png');
            } else {
                img.setAttribute('src', 'img/img_homem-idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/img-garota.png');
            } else if (idade < 25) {
                img.setAttribute('src', 'img/mulher_jovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher_midade.png');
            } else {
                img.setAttribute('src', 'img/img_mulher-idosa.png');
            }
        }
        
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}

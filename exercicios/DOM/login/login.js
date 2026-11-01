const btnLogin = document.querySelector('button');
const form = document.querySelector('form');

btnLogin.addEventListener('click', event => {
    event.preventDefault(); //IMPEDE O CARREGAMENTO DA PÁGINA
    form.classList.add('oculta-form');

});

form.addEventListener('animationend', event => {
    if (event.animationName == 'top') {
        form.style.display = 'none';
        window.location.href = 'site.html';
    }
});
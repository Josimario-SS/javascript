let letraA = document.getElementById('letraA');
let letraB = document.getElementById('letraB');
let letraC = document.getElementById('letraC');
let letraD = document.getElementById('letraD');
let letraE = document.getElementById('letraE');
let letraF = document.getElementById('letraF');

let tabela = document.getElementById('table');

tabela.addEventListener('click', function(event) {
    if (event.target.id == "A") {
        letraA.style.backgroundColor = 'rgb(191,234,215)';
        letraA.focus();
    }
    if (event.target.id == "B") {
        letraB.style.backgroundColor = 'rgb(191,234,215)';
        letraB.focus();
    }
    if (event.target.id == "C") {
        letraC.style.backgroundColor = 'rgb(191,234,215)';
        letraC.focus();
    }
    if (event.target.id == "D") {
        letraD.style.backgroundColor = 'rgb(191,234,215)';
        letraD.focus();
    }
    if (event.target.id == "E") {
        letraE.style.backgroundColor = 'rgb(191,234,215)';
        letraE.focus();
    }
    if (event.target.id == "F") {
        letraF.style.backgroundColor = 'rgb(191,234,215)';
        letraF.focus();
    }
    setTimeout(() => {
        event.target.remove();
    }, 500);
});

let div = document.getElementById('div-container');
let body = document.getElementById('body');
body.addEventListener('load', function() {
    div.style.backgroundColor = 'red';
});
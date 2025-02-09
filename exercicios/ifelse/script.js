// IF E ELSE
/*
var interruptor = "on"

if (interruptor == "on") {
    console.log("A lampada está ligada")
}
else {
    console.log("A lampada está desligada.")
}
*/
/*
let hora = new Date().getHours();
alert(hora)

if (hora < 12) {
    alert('Bom dia!')
}
else if (hora < 18) {
    alert('Boa tarde')
} else {
    alert('Boa noite')
}
*/

function verificar() {
    let nome = document.getElementById('nome').value;

    if (nome == "" || nome == null) {
        let p = document.getElementById('teste')
        p.innerHTML = "o campo não pode ser vazio";
        p.style.color = 'red';
    }
    else {
        let p = document.getElementById('teste')
        p.innerHTML = "Tudo certo, pode seguir!";
        p.style.color = 'green';
    }
}
/* A SEGUIR VEJA UM EXEMPLO DE COMO FAZER 
UMA COMUNICAÇÃO ENTRE CLIENTE E SERVIDOR COM AJAX */

function reqListener() {
    console.log(this.responseText);
}
//instancia objeto
let oReq = new XMLHttpRequest();
oReq.onload = reqListener;

// método para abrir a url
oReq.open("get", "yourFile.txt", true);

// método para enviar a requisição
oReq.send();
/* JSON 

JSON significa Javascript Object Notation que traduzido é Notação de Objeto Javascript.

Explicando de um modo mais simples JSON é basicamente uma forma de converter um objeto em texto e ao contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por práticamente todas as linguagens de programação.

Para trabalhar  com JSON no Javascript usamos dois métodos.

Json.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON

*/


const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010
}

// Converteu para texto JSON
let texto = JSON.stringify(carro);
//Colocou o texto no nosso html
document.getElementById('area').innerHTML = texto;

// Convertemos texto em objeto
let obj = JSON.parse(texto);
// Pegamos um valor deste objeto
console.log(obj.modelo);
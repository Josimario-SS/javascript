/* CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no Javascript as classes. As classes são um conceito antigo em programação e várias linguagens utilizão elas. Mas no Javascript isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente as classes são como "fábricas" para criar objetos. 
Pode-se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as classes no Javascript usam um método chamado constructor() para fabricar os objetos.
*/


class Carro {

    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " Buzinou: Biiiiiiiiiii"
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Wolksvagen", "Gol", 2013);
console.log(uno);
console.log(gol.buzina());
gol.ano = 2018; //Declara novo valor para o ano.
console.log(gol);
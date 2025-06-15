/*var item1 = "arroz"
var item2 = "feijao"
var item3 = "leite"
var item4 = "macarrao"

const lista = ["arroz", "feijao", "leite", "macarrao"]
// console.log(lista[2])
lista.push("carne"); // vai adicionar mais uma string/dado a nossa lista. 

console.log(lista[lista.length - 1]); //mostra o último item da array.

const pessoas = ["Dimitri", "teixeira", 38, "Professor"];

*/

//  FUNÇÕES PARA ARRAYS


/*
const numeros = [10, 20, 30, 40, 50];

numeros.sort(function (a,b) {return b - a});  // sort() vai mostrar strings em ordem alfabetica

console.log(numeros) //VAI MOSTRAR OS NÚMEROS EM ORDEM. PORÉM SE b-a, ENTÃO VAI MOSTRAR EM ORDEM DECRESCENTE.
*/


/*
const numeros = [10, 20, 30, 40, 50];
// ESSA FUNÇÃO VAI MOSTRAR O MAIOR NUMERO
function MaiorNumero(array) {
    return Math.max.apply(null, array);
}
// ESSA FUNÇÃO VAI MOSTRAR O MENOR NUMERO
function MenorNumero(array) {
    return Math.min.apply(null, array);
}

console.log(MenorNumero(numeros));
*/


const numeros = [10, 20, 30, 40, 50];
const maior = numeros.filter(filtragem);

function filtragem(value, index, array) {
    return value > 20;
}

console.log(maior)

/*
const jogadores = ["Pele", " Neimar", " Maradona", " Messi", "nene", "jogafor"];

const craques = jogadores.slice(1,4)

document.getElementById("teste").innerText = craques
*/
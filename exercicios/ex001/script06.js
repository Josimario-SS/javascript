/* ESTRUTURA DE REPETIÇAO WHILE E DO WHILE*/

let valor = prompt("Entre com um número para  a tabuada:")
let i = 1; /* Variavel contadora */

/*WHILE SÓ EXECUTARÁ SE A CONDIÇÃO FOR RESPEITADA.

    while (i <= 10) {
        alert(valor + "x" + i + " = " + (valor * i));

        document.write(`${valor} x ${i} = ${(valor * i)} <br>`)

        i++; Incrementando a minha variavel 
    }

*/


do {
    alert(valor + "x" + i + " = " + (valor * i))
    i++;
}
while (i <= 10)

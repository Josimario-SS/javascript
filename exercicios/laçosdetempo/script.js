/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalo de tempo especificados. Esses intervalos de tempo chamados de cronometragem.

Os dois metodos-chave para usar com javascript são:

setTimeout(Function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado em milisegundos.

setInterval(Function, milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

function ativarContagem() {
    /*document.getElementById('tempo').innerHTML = "Começou a contar";
    tempo = setTimeout(function(){ 
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 5000)
    */

    tempo = setInterval(function() {
        let = cronometro = document.getElementById('tempo').innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}

function pararContagem() {
    /*clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem.";
    */

    clearInterval(tempo);
}

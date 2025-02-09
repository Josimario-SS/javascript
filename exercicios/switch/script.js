//  SWITCH  É USADO PARA REALIZAR DIFERENTES AÇÕES COM BASE EM DIFERENTES CONDIÇÕES EM MESMO BLOCO DE VERIFICAÇÃO. CASO A CONDIÇÃO NÃO SEJA COMPATIVEL NÃO SERÁ REALIZADA E O VALOR PADRÃO SERÁ ADICIONADO.


function diaDaSemana() {
    /*let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); //VAI DEIXAR TUDO EM MAIÚCULA PARA QUE NÃO HAJA PROBLEMA CASO SEJA DIGITADO PALAVRAS EM MINUSCULA.
    */

    let dia = new Date().getDay();
    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é domingo";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Hoje é Terça";
            break;
        case 3:
            document.getElementById("teste").innerHTML = "Hoje é Quarta";
            break;
        case 4:
            document.getElementById("teste").innerHTML = "Hoje é Quinta";
            break;
        case 5:
            document.getElementById("teste").innerHTML = "Hoje é Sexta";
            break;
        case 6:
            document.getElementById("teste").innerHTML = "Hoje é Sabado";
            break;
        default:
        document.getElementById("teste").innerHTML = "Não sei que dia é";
        
    }
}
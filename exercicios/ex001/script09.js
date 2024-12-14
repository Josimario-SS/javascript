//       UTILIZANDO A CAIXA DE MENSAGEM "CONFIRM"

//    let opcao = confirm("Deseja encerrar?");
//    document.write("Sua escolha foi " + opcao);

/*function exibeMensagem() {
    let escopoDaFuncao = 'Mensagem fora do IF';
        if (true) {
            let escopoDoIf = 'Mensagem dentro do IF';
            console.log(escopoDoIf);
        }
        console.log(escopoDaFuncao)

       // console.log(escopoDoIf + " 01")
}

exibeMensagem();
*/



// Exemplo 1 CONSTANTES:

/*
const pi = 3.1416; //constante declarada
pi = 3; //tentativa de modificação para o valor "3"
console.log(pi)
*/

// Ao executar este código é exibido o erro de “atribuição para variável constante”, que não é permitido.


// Exemplo 2 CONSTANTES:

/*
const minutos = {"horas": 60, "dias": 1440, "mes": 43200}; 
//A variável “minutos” possui uma estrutura primária com os nomes “hora”, “dia” e “mes". 
console.log(minutos);

minutos.mes = 44640; 
// Ao tentar modificar o conteúdo de “mes”, essa modificação ocorre sem problemas, pois a modificação está em seu nível secundário.
console.log(minutos)
*/



// Exemplo 3 CONSTANTES:

const  minutos = {"hora": 60, "dia": 24, "mes": 30};
console.log(minutos);

minutos.mes = 28;
console.log(minutos);

minutos = {"ano": 365}; //Aqui tentamos modificar a estrutura primária adicionando um novo termo (“ano”), e o mesmo erro é apresentado, pois não é permitido modificar sua estrutura.
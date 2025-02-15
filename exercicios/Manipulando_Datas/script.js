// MANIPULANDO DATAS EM JAVASCRIPT

// Comando base para pegar a data
let data = new Date();
//console.log(data);


// Pega o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano)

// Pegar o mês atual - De 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
// console.log(mes)


// Mostra o mês no formato escrito
const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito)


// Pegar o dia do mês
let diaMes = data.getDate();
console.log(diaMes)


// Pegar o dia da semana
let diaSemana = data.getDay();
console.log(diaSemana)

const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito)


// Pegar a hora - de 0 até 23
let hora = data.getHours();
console.log(hora)


// Pegar os minutos
let minutos  = data.getMinutes();
console.log(minutos)



// Pegar os segundos
let segundos = data.getSeconds();
console.log(segundos)


// Pegar os milisegundos
let milisegundos = data.getMilliseconds();
console.log(milisegundos)


// Pegar a data no formato brasileiro
let dataBr = data.toLocaleString('pt-br', {dateStyle: 'short'}); // timeStyle: + 'short' - vai mostrar somente a hora
console.log(dataBr)


// Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();


function addzero(x) {
    return x < 10 ? '0' + x : '' + x; 
}

let dataPadraoBr = diaMes + "/" + addzero(mes) + "/" + ano;
console.log(dataPadraoBr);




//Comparar datas - maior ou menor, ex: vencimentos
let hoje = new Date();
let vencimento = new Date(2026, 0, 15);

if (hoje > vencimento) {
    console.log("Sua conta está vencida")
}
else {
    console.log("Ainda não venceu.")
}


// Diferença entre duas datas em dias
let dataInicial = new Date();
let dataFinal =  new Date(2025, 2, 5);
let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias)
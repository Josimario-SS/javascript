var x = 520; //variável global, apenas escopo de função.

let primeiroNome = "Josi" //Fora do bloco é global

const   anoatual = 2024 //valores que munca mudam, não podem ser reatribuídas.

primeiroNome = prompt('Digite um valor: ')

{ //Bloco
    let nome = "Satoro" //já esta em escopo local e vai rodar primeiro que o modo global.
    alert(nome)
}

let nome = "Charles" //Este está em modo global
alert(primeiroNome)
document.write(primeiroNome)
//anoatual = 2025
//alert(anoatual)
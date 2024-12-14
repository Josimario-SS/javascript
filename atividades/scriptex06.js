let homem, mulher

altura = Number(prompt("Qual a altura da pessoa?"))
sexo = String(prompt("Qual o sexo da pessoa? F ou M"))


homem = (72 * altura) - 58
mulher = (72 * altura) - 44

if(sexo == 'M') {
    document.write("O seu peso é de " + homem)
}
else if (sexo =='F') {
    document.write("O peso desta mulher é de " + mulher)
}

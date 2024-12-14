let desconto

valor = Number(prompt("Qual o valor do produto?"))

desconto = valor * 15 / 100
valorFinal = valor - desconto
if (valorFinal >= 500) {
    document.write("O valor de R$" + valor + " com desconto de 15% é de R$" + valorFinal + "<br>" + "O valor está CARO")
}
else {
    document.write("O valor de R$" + valor + " com desconto de 15% é de R$" + valorFinal + "<br>" + "O valor está BARATO")
}100
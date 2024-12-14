let sal, per

sal = Number(prompt("Digite o salário atual:  "))
per = Number(prompt("Qual a porcentagem de reajuste? "))

 let  novoSalario = sal * per / 100

alert("O salário de R$ " + sal + " após o reajuste de " + per + "% é de R$ " + novoSalario)
document.write("O salário de R$ " + sal + " após o reajuste de " + per + "% é de R$ " + novoSalario)
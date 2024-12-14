let valor = Number(prompt("Digite um valor: "))

for (let i = 1; i <= 10; i++) {
    let mul = i * valor
    document.write(valor + "x" , i , + "=" + mul + "<br>")
}
let i = 1
let dentro = 0, fora = 0

while(i <= 10) {
    let valor = prompt("Entre com um valor")

    if(valor >= 10 && valor <= 20) {
        dentro++
    }
    else {
        fora++
    }

    i++
}

alert("Valor fora do intervalo" + fora)
alert("Valor dentro do intervalo" + dentro)
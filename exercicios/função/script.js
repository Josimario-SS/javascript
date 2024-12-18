/*function olaMundo() {
    alert("Olá mundo, essa é minha primeira função");
}

olaMundo()
*/

/*
function olaMundo(valor, valor2) {
    alert(valor * valor2);
}

olaMundo(10, 5)
olaMundo(50, 30)
*/

/*
function olaMundo(valor, valor2) {
    return valor * valor2;
}
document.write(olaMundo(3, 12))


/*
function valorDinheiro(quantiaDinheiro) {
    quantiaDinheiro = Number(prompt("Quanto você tem?"))
    if (quantiaDinheiro >= 50) {
        return ("Vá ao cinema !!")
    }
    else {
        return ("Fique em casa vendo TV !!")
    }
   
}
alert(valorDinheiro())
*/


function conversorMoedas(valorReal, tipoMoeda) {
    valorReal = Number.parseFloat(prompt("Qual o valor que você quer converter? [R$]"))

    tipoMoeda = prompt("Para que tipo de moeda você quer converter? [D para Dólar / E para Euro]")

    if (tipoMoeda == "d" || tipoMoeda == "D") {
        return ("O valor convertido para Dólar é " + (valorReal * 5.50).toFixed(1))
    }
    else if (tipoMoeda == "e" || tipoMoeda == "E") {
        return ("O valor convertido para Euro é " + (valorReal * 7).toFixed(1))
    }
}

alert(conversorMoedas())

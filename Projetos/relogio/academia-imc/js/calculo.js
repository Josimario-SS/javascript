const botaoCalcular = document.getElementById('calcular');

function calcularImc(peso, altura) {

    let resultadoImc = Number(peso) / (Number(altura) * Number(altura));

    return resultadoImc.toFixed(2);
}

botaoCalcular.addEventListener('click', function() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let valorImc = calcularImc(peso, altura);

    document.getElementById('resultado_valor_imc').innerText = valorImc;

    if (valorImc < 18.5) {
        document.getElementById('resultado_status_imc').innerText = "Magreza";
    }
    else if (valorImc >= 18.5 && valorImc <= 24.9) {
        document.getElementById('resultado_status_imc').innerText = "Normal";
    }
    else if (valorImc >=25 && valorImc <= 29.9) {
        document.getElementById('resultado_status_imc').innerText = "Sobrepeso";
    }
    else if (valorImc >=30 && valorImc <= 39.9) {
        document.getElementById('resultado_status_imc').innerText = "Obesidade";
    }
    else {
        document.getElementById('resultado_status_imc').innerText = "Erro!";
    }

});


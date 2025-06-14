function gerarTabuada() {

    // Obtém o valor do número digitado pelo usuário
    // e o elemento onde o resultado será exibido
    const numero = document.getElementById("txtnumero").value;
    const resultado = document.getElementById("resultado");
    

    let i = 0; // Inicializa o contador i com 1


    if (numero === "") {
        // Se o campo estiver vazio, exibe uma mensagem de erro
        resultado.innerHTML = "<p>Por favor, digite um número.</p>";
        return; // Interrompe a execução da função
    }
    resultado.innerHTML = ""; // Limpa o conteúdo anterior do resultado
    while (i < 11) {
        let produto = numero * i; // Calcula o produto
        // Exibe o resultado
        resultado.innerHTML += `<p>${numero} x ${i} = ${produto}</p>`;
        i++; // Incrementa o contador i
    }
    
}

function limpar() {
    // Limpa o campo de entrada e o resultado
    document.getElementById("txtnumero").value = "";
    document.getElementById("resultado").innerHTML = "";
}
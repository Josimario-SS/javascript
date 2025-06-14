let indice = document.getElementById("indice");

let num = [
    5,
    8,
    2
]

// Adiciona o número 3 ao final do vetor
num.sort();
num.push(9);

indice.innerHTML = `O vetor é: ${num.length} <br>`;
indice.innerHTML += `O vetor é: ${num} <br>`;
indice.innerHTML += `O primeiro elemento é: ${num[0]} <br>`;
indice.innerHTML += `${num.sort()} <br>`;

// Exibe o índice do número 9 no vetor
indice.innerHTML += `${num.indexOf(9)} <br>`;

// Percorre o vetor e exibe cada elemento com seu índice
for (let pos = 0; pos < num.length; pos++) {
    indice.innerHTML += `A posição ${pos} tem o valor ${num[pos]} <br> `;
}
indice.innerHTML += `<hr>`;
// Outra forma de percorrer o vetor usando for...in
for (let pos in num) {
    indice.innerHTML += `A posição ${pos} tem o valor ${num[pos]} <br>`;
}

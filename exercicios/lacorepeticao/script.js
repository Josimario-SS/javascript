// LAÇO DE REPETIÇÃO for 
// Laços oferecem um jeito facil e rápido de executar uma ação repetidas vezes.
/*
for (let i = 0; i < 101; i++) {
    console.log(i)
}
*/

/*
for (let i = 1900; i < 2025; i++) {
    document.getElementById("ano").innerHTML += "<option value='" + i + " '>"+ i +"</option>";
}
*/

const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];
let tamanho = carros.length;

for (i = 0; i < tamanho; i++) {
    console.log(carros[i] + " - ")
}


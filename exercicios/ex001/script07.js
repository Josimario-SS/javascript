//Lendo o array
for (let i = 0; i < 3 ; i++) {
    notas[i] = Number(prompt("Digite uma nota"))
}
 
notas.push(8)
notas.push(35)
notas.pop()
notas.pop()
//Exibindo o array
 
for(let i = 0; i < notas.length; i++){
    document.write(`Dados do Array: ${notas[i]}, `)
}
 
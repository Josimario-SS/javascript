let n1, n2, n3

n1 = Number(prompt("Digite a primeira nota: "))
n2 = Number(prompt("Digite a segunda nota: "))
n3 = Number(prompt("Digite a terceira nota: "))

let soma = n1 + n2 + n3
let media = soma / 3

alert("A soma de todas as notas é " + soma + " e a media é igual á " + media.toFixed(1))

document.write(`A media da soma das 3 notas é:  ${media.toFixed(1)}`)

if(media < 5) {
    alert("Aluno reprovado !")
}
else if(media >= 5 && media < 7) {
    alert("Aluno de recuperação !")
}
else {
    alert("Aluno aprovado !")
}
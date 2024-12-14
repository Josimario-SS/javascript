let n1, n2, n3

n1 = Number(prompt("Digite a primeira nota: "))
n2 = Number(prompt("Digite a segunda nota: "))
n3 = Number(prompt("Digite a terceira nota: "))

if (n1 > n2 && n1 > n3) {
    alert("A maior nota é a nota 1 !")
}
else if (n2 > n1 && n2 > n3) {
    alert("A maior nota é a nota 2 !")
}
else{
    alert("A maior nota é a nota 3 !")
}
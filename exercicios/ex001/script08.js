let notas = []

let pessoa = {
    nome: 'Charles', 
    profissao: 'Colsultor de TI / Professor',
    salario: 1000.50,
    situacao: true
}

let pessoa2 = {
    nome: 'Charles', 
    profissao: 'Colsultor de TI / Professor',
    salario: 1000.50,
    situacao: true
}

//let bd = [pessoa.pessoa2]
 
alert(pessoa.nome)
alert(pessoa.profissao)

for (const i in pessoa) {
    pessoa[i] = prompt("Digite o valor para o objeto: ")
} 
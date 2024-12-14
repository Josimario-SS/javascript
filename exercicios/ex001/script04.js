let mes = 4;
let nomeMes;

switch (mes) {
    case 1:
        nomeMes = 'Janeiro'
        break;
    case 2:
        nomeMes = 'Fevereiro'
        break;
    case 3:
        nomeMes = 'Março'
        break;
    default:
        nomeMes = 'Digite um mês válido !!!'
        break;
}
alert("Mes selecionado = " + nomeMes)
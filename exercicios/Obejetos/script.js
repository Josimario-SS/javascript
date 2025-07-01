let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p) {
        console.log('Engordou');
        this.peso += p;
    },
    emagrecer(p) {
        console.log('Emagreceu');
        this.peso -= p;
    }
}

// Exemplo de construtor, se desejar criar outros amigos:
function Amigo(nome, sexo, peso) {
    this.nome = nome;
    this.sexo = sexo;
    this.peso = peso;
    this.engordar = function(p) {
        console.log('Engordou');
        this.peso += p;
    };
    this.emagrecer = function(p) {
        console.log('Emagreceu');
        this.peso -= p;
    };
}
// Para criar um novo amigo, use:
// let outroAmigo = new Amigo('Maria', 'F', 70);

alert(amigo.nome)
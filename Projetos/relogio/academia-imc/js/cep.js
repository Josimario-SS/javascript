const botaoConsultar = document.getElementById('pesquisar');

const getCep = async function(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let response = await fetch(url);
    let itemCep = await response.json();

    document.getElementById('logradouro').value = itemCep.logradouro;
    document.getElementById('complemento').value = itemCep.complemento;
    document.getElementById('bairro').value = itemCep.bairro;
    document.getElementById('cidade').value = itemCep.localidade;
    document.getElementById('estado').value = itemCep.estado;

    console.log(itemCep);
    
}

botaoConsultar.addEventListener('click', function() {
    let cep = document.getElementById('input-cep');
    getCep(cep.value);
});
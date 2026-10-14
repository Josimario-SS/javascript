function Conexao() {
    // Cria um objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Configura uma solicitação, especificanfo o método (GET) e a url
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    // Define uma função de callback para lidar com a resposta
    xhr.onload = function () {
        if (xhr.status === 200) {
            // A solicitação foi bem sucedida
            const response = JSON.parse(xhr.responseText);
            console.log("Titulo do post: ", response.title);
        }
        else {
            // A solicitação falhou
            console.log("Ocorreu um erro durante a solicitação.");

        }
    };

    xhr.send();
}


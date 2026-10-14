const CHATGPT_KEY = "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";

const consultarChat = async () => {
    let question = document.getElementById("quest").value;
    document.getElementById('pergunta').innerHTML = question;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + CHATGPT_KEY,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // Modelo moderno, rápido e econômico
                messages: [
                    { role: "user", content: question }
                ],
                max_tokens: 1024,
                temperature: 0.5
            }),
        });

        const data = await response.json();

        if (data.choices && data.choices[0]) {
            document.getElementById('resposta').innerHTML = data.choices[0].message.content;
        } else if (data.error) {
            console.error("Erro da API:", data.error);
            document.getElementById('resposta').innerHTML = "Erro na resposta da API.";
        }
    } catch (error) {
        console.error("Erro de conexão/requisição:", error);
        document.getElementById('resposta').innerHTML = "Reformule a pergunta ou tente novamente.";
    }
}
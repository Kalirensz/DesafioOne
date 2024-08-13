function codificar() {
    const inputText = document.getElementById("inputText").value;
    const outputText = btoa(inputText); 
    document.getElementById("outputText").value = outputText;
}

function decodificar() {
    const inputText = document.getElementById("inputText").value;
    try {
        const outputText = atob(inputText); 
        document.getElementById("outputText").value = outputText;
    } catch (e) {
        document.getElementById("outputText").value = "Erro: Entrada inválida para decodificação!";
    }
}

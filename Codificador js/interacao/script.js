function criptografar() {
    let inputTexto = document.getElementById("input-texto").value;
    let textoCriptografado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <img src="" alt="">
        <h2>Texto Criptografado:</h2>
        <span>${textoCriptografado}</span>
    `;
}

function descriptografar() {
    let inputTexto = document.getElementById("input-texto").value;
    let textoDescriptografado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <img src="" alt="">
        <h2>Texto Descriptografado:</h2>
        <span>${textoDescriptografado}</span>
    `;
}
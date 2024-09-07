document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo");
    titulo.classList.add("typing"); // Adiciona a classe .typing ao título
});

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let mensagemErro = document.getElementById("mensagem-erro");
    let videoContainer = document.getElementById("video-container");
    let query = document.getElementById("input-instagram").value.toLowerCase();
    let resultados = "";
    let encontrado = false;

    // Limpar resultados anteriores
    section.innerHTML = "";
    mensagemErro.style.display = "none";
    videoContainer.style.display = "none";

    // Pesquisa no banco de dados
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(query)) {
            encontrado = true;
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (encontrado) {
        section.innerHTML = resultados;
        section.style.display = "block";  // Mostra o bloco de resultados
    } else {
        mensagemErro.style.display = "block";  // Mostra a mensagem de erro
    }
}

function exibirTodos() {
    let section = document.getElementById("resultados-pesquisa");
    let mensagemErro = document.getElementById("mensagem-erro");
    let videoContainer = document.getElementById("video-container");

    // Limpar resultados anteriores
    section.innerHTML = "";
    mensagemErro.style.display = "none";
    videoContainer.style.display = "none";

    // Exibe todos os dados no banco de dados
    let resultados = "";
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    section.innerHTML = resultados;
    section.style.display = "block";  // Mostra o bloco de resultados
    videoContainer.style.display = "none";  // Oculta o vídeo
}

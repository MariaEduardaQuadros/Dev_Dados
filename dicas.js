// dicas.js

// Função para carregar dicas do localStorage e exibir
function carregarDicas() {
    const dicasContainer = document.getElementById('livro-dicas');
    dicasContainer.innerHTML = ''; // Limpa as dicas atuais

    // Obtém as dicas do localStorage
    const dicas = JSON.parse(localStorage.getItem('dicas')) || [];
    
    // Adiciona as dicas ao container
    dicas.forEach(dica => {
        const dicaElement = document.createElement('div');
        dicaElement.classList.add('dica');
        dicaElement.innerHTML = `<strong>${dica.nome}</strong>: ${dica.texto}`;
        dicasContainer.appendChild(dicaElement);
    });
}

// Função para adicionar uma nova dica
function adicionarDica(nome, texto) {
    const dicas = JSON.parse(localStorage.getItem('dicas')) || [];
    dicas.push({ nome, texto });
    localStorage.setItem('dicas', JSON.stringify(dicas));
}

// Evento de submissão do formulário
document.getElementById('dica-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const dica = document.getElementById('dica').value;

    if (nome && dica) {
        adicionarDica(nome, dica);
        carregarDicas(); // Atualiza a lista de dicas exibida
        event.target.reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Carrega as dicas quando a página é carregada
window.onload = carregarDicas;

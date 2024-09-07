document.querySelectorAll('.dica').forEach(function(dica) {
    dica.addEventListener('click', function() {
        // Esconde todas as telas
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.classList.remove('ativa');
        });

        // Mostra a tela correspondente à linha clicada
        const index = this.getAttribute('data-index');
        document.getElementById('dica-' + index).classList.add('ativa');
    });
});
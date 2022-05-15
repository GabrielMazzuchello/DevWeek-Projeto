const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

    

        const idselecionado = personagem.attributes.id.value;
        if(idselecionado === 'ultron') return;

        const imagemjogador1 = document.getElementById('personagem-jogador-1');
        imagemjogador1.src = `./src/imagens/${idselecionado}.png`; 

        const nomeJogador1 = document.getElementById('nome-jogador-1');

        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;
    });
});
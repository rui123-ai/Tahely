document.addEventListener('DOMContentLoaded', () => {
    // Simula carregamento do terminal
    setTimeout(() => {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.classList.remove('hidden');
        
        // Efeito de digitação para a mensagem de boas-vindas
        const text = welcomeMessage.textContent;
        welcomeMessage.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                welcomeMessage.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                // Mostra o menu de navegação após a mensagem
                setTimeout(() => {
                    document.getElementById('nav-menu').classList.remove('hidden');
                }, 1000);
            }
        }
        
        typeWriter();
    }, 2000);
});

// Adiciona efeito de glitch aos botões
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = `translate(${Math.random()*4-2}px, ${Math.random()*4-2}px)`;
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translate(0, 0)';
    });
}); 
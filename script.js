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

    // Music Player functionality
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (!isPlaying) {
            bgMusic.play()
                .then(() => {
                    isPlaying = true;
                    musicToggle.classList.add('playing');
                })
                .catch(error => {
                    console.log("Playback failed:", error);
                });
        } else {
            bgMusic.pause();
            isPlaying = false;
            musicToggle.classList.remove('playing');
        }
    });

    // Ajusta o volume para não ficar muito alto
    bgMusic.volume = 0.3;

    // Adiciona interação com tecla 'M'
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'm') {
            musicToggle.click();
        }
    });
});

// Adiciona efeito de glitch aos botões
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = `translate(${Math.random()*4-2}px, ${Math.random()*4-2}px)`;
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translate(0, 0)';
    });

    button.addEventListener('click', () => {
        if (button.textContent === 'HABILIDADES') {
            // Esconde outras seções se necessário
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Mostra a seção de habilidades
            const abilitiesSection = document.getElementById('abilities-section');
            abilitiesSection.classList.remove('hidden');
            
            // Adiciona efeito de fade in
            abilitiesSection.style.opacity = '0';
            abilitiesSection.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                abilitiesSection.style.opacity = '1';
            }, 100);
        }
        
        if (button.textContent === 'IDENTIDADE') {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            
            const identitySection = document.getElementById('identity-section');
            identitySection.classList.remove('hidden');
            
            // Fade in effect
            identitySection.style.opacity = '0';
            identitySection.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                identitySection.style.opacity = '1';
            }, 100);

            // Trigger typewriter effect for personal entry
            const entryText = identitySection.querySelector('.entry-text');
            entryText.style.width = '0';
            setTimeout(() => {
                entryText.style.width = '100%';
            }, 500);
        }
    });
}); 
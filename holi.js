document.addEventListener('DOMContentLoaded', () => {
    // Particle.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 50 },
            color: { value: ['#FF5733', '#4CAF50', '#FFC107', '#E91E63', '#9C27B0'] },
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: true },
            size: { value: 5, random: true },
            move: {
                enable: true,
                speed: 4,
                direction: 'none',
                random: true,
                out_mode: 'out'
            }
        }
    });

    // Font animation with 0.6-second interval
    const title = document.querySelector('.title');
    const fonts = [
        'Pacifico',
        'Lobster',
        'Dancing Script',
        'Righteous',
        'Poppins'
    ];
    let currentFontIndex = 0;

    function changeFont() {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        title.style.fontFamily = fonts[currentFontIndex];
    }

    setInterval(changeFont, 600); // Changed to 0.6 seconds

    // Rainbow color animation
    const colorBurst = document.getElementById('colorBurst');
    let hue = 0;
    
    function createRainbowParticle() {
        const particle = document.createElement('div');
        particle.className = 'color-particle';
        
        // Use incrementing hue for smoother rainbow transition
        hue = (hue + 5) % 360;
        particle.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
        
        const size = Math.random() * 15 + 8;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 3 + 2;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;
        
        let opacity = 1;
        
        function animate() {
            if (opacity <= 0) {
                particle.remove();
                return;
            }
            
            const currentX = parseFloat(particle.style.left);
            const currentY = parseFloat(particle.style.top);
            
            particle.style.left = `${currentX + dx}px`;
            particle.style.top = `${currentY + dy}px`;
            
            opacity -= 0.02;
            particle.style.opacity = opacity;
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    // Create particles with adjusted interval
    setInterval(createRainbowParticle, 100);
});

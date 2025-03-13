* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    touch-action: none;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg,
        rgba(255, 87, 51, 0.1) 0%,
        rgba(76, 175, 80, 0.1) 25%,
        rgba(255, 193, 7, 0.1) 50%,
        rgba(233, 30, 99, 0.1) 75%,
        rgba(156, 39, 176, 0.1) 100%),
        rgba(26, 28, 32, 0.9);
    min-height: 100vh;
    overflow: hidden;
    position: relative;
}

#particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.container {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: transparent;
}

.content {
    text-align: center;
    color: white;
    animation: fadeIn 1.5s ease-out;
    padding: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.title {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #FF5733, #4CAF50, #FFC107, #E91E63, #9C27B0);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbowText 0.5s linear infinite;
    transition: font-family 0.2s ease;
    letter-spacing: 0.1em;
    text-shadow: none;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #ffffff;
    font-weight: 300;
    letter-spacing: 0.05em;
}

.color-btn {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #FF5733, #E91E63);
    border: none;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.color-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.color-burst {
    position: absolute;
    pointer-events: none;
}

.color-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(3px);
    mix-blend-mode: screen;
    box-shadow: 0 0 15px currentColor;
    will-change: transform, opacity;
    transform: translate(0, 0);
    transition: all 0.1s linear;
}

.floating-color {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(2px);
    mix-blend-mode: screen;
    animation: floatUpAndGrow 0.75s ease-out forwards;
    bottom: -20px;
    will-change: transform, opacity;
}

.floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

.pichkari, .gulal, .balloon {
    position: absolute;
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    animation: float 6s ease-in-out infinite;
}

.pichkari {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF5733"><path d="M12 2L2 22h20L12 2z"/></svg>');
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.gulal {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234CAF50"><circle cx="12" cy="12" r="10"/></svg>');
    top: 40%;
    right: 15%;
    animation-delay: 2s;
}

.balloon {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23E91E63"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>');
    bottom: 30%;
    left: 50%;
    animation-delay: 4s;
}

.message-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 15px;
    margin-top: 3rem;
    text-align: center;
    color: white;
    max-width: 600px;
    animation: slideUp 1s ease-out;
}

.color-palette {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

.color-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.sparkles {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.sparkle {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(1px);
    mix-blend-mode: screen;
    box-shadow: 0 0 3px currentColor;
    animation: sparkleAnimation 0.5s ease-out forwards;
    will-change: transform, opacity;
}

.color-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background: linear-gradient(45deg,
        rgba(255, 87, 51, 0.05) 0%,
        rgba(76, 175, 80, 0.05) 50%,
        rgba(255, 193, 7, 0.05) 100%);
    animation: colorPulse 4s ease-in-out infinite;
}

.emoji-row {
    position: fixed;
    display: flex;
    justify-content: space-around;
    z-index: 3;
    width: 100%;
    padding: 0 5%;
}

.emoji-row-top {
    top: 5%;
}

.emoji-row-bottom {
    top: 15%;
}

.dancing-emoji {
    position: relative;
    font-size: 2.5rem;
    opacity: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    transform-origin: top;
    animation: swing 3s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

.dancing-emoji::before {
    content: '';
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}

@keyframes swing {
    0%, 100% {
        transform: rotate(0deg);
    }
    20% {
        transform: rotate(15deg);
    }
    40% {
        transform: rotate(-10deg);
    }
    60% {
        transform: rotate(5deg);
    }
    80% {
        transform: rotate(-3deg);
    }
}

.emoji-shadow {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 20px;
    height: 4px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    filter: blur(3px);
    transform: translateX(-50%) scaleX(1.2);
    animation: shadowMove 3s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
}

@keyframes shadowMove {
    0%, 100% {
        transform: translateX(-50%) scaleX(1);
    }
    20% {
        transform: translateX(-30%) scaleX(0.8);
    }
    40% {
        transform: translateX(-70%) scaleX(0.8);
    }
    60% {
        transform: translateX(-40%) scaleX(0.9);
    }
    80% {
        transform: translateX(-60%) scaleX(0.9);
    }
}

.emoji-1 { animation-delay: 0s; }
.emoji-2 { animation-delay: 0.25s; }
.emoji-3 { animation-delay: 0.5s; }
.emoji-4 { animation-delay: 0.75s; }
.emoji-5 { animation-delay: 1s; }
.emoji-6 { animation-delay: 1.25s; }
.emoji-7 { animation-delay: 1.5s; }
.emoji-8 { animation-delay: 1.75s; }

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes rainbowText {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

@keyframes titleGradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes particleFade {
    0% {
        transform: scale(1);
        filter: blur(1px);
    }
    50% {
        transform: scale(1.2);
        filter: blur(2px);
    }
    100% {
        transform: scale(1.5);
        filter: blur(3px);
    }
}

@keyframes floatUpAndGrow {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) scale(2);
        opacity: 0;
    }
}

@keyframes sparkleAnimation {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }
    50% {
        transform: scale(1.2) rotate(180deg);
        opacity: 1;
    }
    100% {
        transform: scale(0) rotate(360deg);
        opacity: 0;
    }
}

@keyframes colorPulse {
    0% { opacity: 0.5; }
    50% { opacity: 0.8; }
    100% { opacity: 0.5; }
}

/* Responsive Design */
@media (max-width: 768px) {
    .title {
        font-size: 3rem;
    }
    
    .subtitle {
        font-size: 1.2rem;
    }
    
    .message-box {
        margin: 2rem;
        padding: 1.5rem;
    }
}

/* Mobile Optimizations */
@media (max-width: 768px) {
    .dancing-emoji {
        font-size: 2rem;
    }

    .emoji-row-top {
        top: 10%;
    }

    .emoji-row-bottom {
        top: 20%;
    }

    .title {
        font-size: 3rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .dancing-emoji::before {
        height: 15px;
        top: -15px;
    }
}

@media (max-width: 480px) {
    .dancing-emoji {
        font-size: 1.8rem;
    }

    .emoji-row-top {
        top: 8%;
    }

    .emoji-row-bottom {
        top: 16%;
    }

    .title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }
}

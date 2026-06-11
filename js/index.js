// index.js

// Efeito sonoro de drone ao passar o mouse
document.querySelectorAll('.btn-assistir').forEach(button => {
    button.addEventListener('mouseover', () => {
        let audio = new Audio('drone-sound.mp3');
        audio.play();
    });
});

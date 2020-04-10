const keyboard = document.getElementById('qwerty');
const phraseToGuess = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');

let missed = 0;

startGame.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});
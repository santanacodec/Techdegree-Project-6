const keyboard = document.getElementById('qwerty');
const phraseToGuess = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');

var phrases = [
    "Beat around the bush",
    "When pigs fly",
    "Speak of the devil",
    "A piece of cake",
    "No pain no gain"
];

let missed = 0;

// Removes the Wheel Of Success overlay upon clicking 'start game'.
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {

}
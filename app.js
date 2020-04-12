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

// Function to get a random phrase from phrases array and splits it into a character array
function getRandomPhraseAsArray(arr) {
    let randomArray = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomArray);
    for (let i = 0; i < randomArray.length; i++) {              
        console.log(randomArray[i]);
/*        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);   
        }*/
    }
}
getRandomPhraseAsArray(phrases);

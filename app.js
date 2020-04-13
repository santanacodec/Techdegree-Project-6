const keyboard = document.getElementById('qwerty');
const phraseToGuess = document.querySelector('phrase ul');
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
   // console.log(randomArray);
    let arrayChar = randomArray.split("");
   // console.log(arrayChar);

    return arrayChar;
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    console.log(phraseArray);
    const li = document.createElement('li');

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] + " hi");
        }
    }
}
addPhraseToDisplay(phraseArray);


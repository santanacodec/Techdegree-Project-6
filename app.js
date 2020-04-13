const keyboard = document.getElementById('qwerty');
const phraseToGuess = document.getElementById('phrase');
const phraseUl = phraseToGuess.querySelector('ul');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');
let missed = 0;
var phrases = [
    "beat around the bush",
    "when pigs fly",
    "speak of the devil",
    "a piece of cake",
    "no pain no gain"
];

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

// Function that adds a phrase to display as li elements to #phrase ul.
function addPhraseToDisplay(arr) {
    console.log(phraseArray);   
    for (let i = 0; i < arr.length; i++) {
        const list = document.createElement('li');
        // console.log(arr[i]);
        for (let j = 0; j < arr[i].length; j++) {           
            // console.log(arr[i][j] + " hi");
            list.appendChild(document.createTextNode(arr[i][j]));
            phraseUl.appendChild(list);
            if (arr[i][j] !== ' ') {
                list.className = 'letter';
            }
        }
    }
}
addPhraseToDisplay(phraseArray);

function checkLetter(button) {

}

keyboard.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        let key = e.target;
        console.log(key);
        key.className = 'chosen';
        if (e.target.className == 'chosen') {
            key.disabled = true;
        }
    }
    checkLetter(key);
});
const keyboard = document.getElementById('qwerty');
const phraseToGuess = document.getElementById('phrase');
const phraseUl = phraseToGuess.querySelector('ul');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');
let tries = document.querySelectorAll("li.tries");
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
    let arrayChar = randomArray.split("");

    return arrayChar;
}

const phraseArray = getRandomPhraseAsArray(phrases);

// Function that adds a phrase to display as li elements to #phrase ul.
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const list = document.createElement('li');
        for (let j = 0; j < arr[i].length; j++) {           
            list.appendChild(document.createTextNode(arr[i][j]));
            phraseUl.appendChild(list);
            if (arr[i][j] !== ' ') {
                list.className = 'letter';
            } else {
                list.className = 'space';
            }
        }
    }
}
addPhraseToDisplay(phraseArray);

// function to check to see if letter in phrase matches letter of button being clicked.
function checkLetter(button) {
    const getLetter = document.getElementsByClassName('letter');
    let letter = null;
    for (let i = 0; i < getLetter.length; i++) {
        if (button.textContent === getLetter[i].textContent) {
            getLetter[i].className += ' show';
            letter = getLetter[i].textContent;
        }
    } 
    return letter;
}

// function to check to see if number of .letter class is equal to number of .show class
// to determine the outcome of the game.
function checkWin() {
    var outcome;
    const getLetter = document.getElementsByClassName('letter');
    const getShow = document.getElementsByClassName('show');
    var letterCount = getLetter.length;
    var showTick = 0;
    for (let i = 0; i < getShow.length; i++) {
        showTick++;       
    }

    if (letterCount === showTick) {
        overlay.className = 'win';
        document.querySelector('h2.title').innerHTML = "You Win";
        startGame.style.display = 'none';
        outcome = overlay.style.display = 'block';
    }
    
    if (missed >= 5) {
        overlay.className = 'lose';
        document.querySelector('h2.title').innerHTML = "You Lose";
        startGame.style.display = 'none';
        outcome = overlay.style.display = 'block';
    }    
    return outcome;
}

// event listener to listen to keyboard button on screen being clicked.
keyboard.addEventListener('click', (e) => {
    let key = e.target;
    if (e.target.tagName == 'BUTTON') {    
        key.className = 'chosen';
        if (e.target.className == 'chosen') {
            key.disabled = true;
        }
        var letterFound = checkLetter(key);

        if (letterFound === null) {
            tries[missed].innerHTML = "<img src='images/lostHeart.png'>";
            missed++;    
        }  
        
    }
    checkWin();
});

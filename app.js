/* Imports / Get DOM Elements */
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const resetScoreButton = document.getElementById('reset-button');

const oneContainer = document.getElementById('one-container');
const twoContainer = document.getElementById('two-container');
const threeContainer = document.getElementById('three-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

/* State */
const hidingPlaces = ['one', 'two', 'three'];

let correctGuesses = 0;
let totalGuesses = 0;

buttonOne.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'one');
});

buttonTwo.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'two');
});

buttonThree.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'three');
});

resetScoreButton.addEventListener('click', () => {
    totalGuesses = 0;
    correctGuesses = 0;
    resetStyles();
    guessesDisplay();
});

/* Display Functions */
function handleGuess(correctSpot, userGuess) {
    // reset the styles
    resetStyles();
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);
    // then add the face class to that element so that the face shows up
    correctHidingPlaceEl.classList.add('pearl');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    guessesDisplay();
}

function resetStyles() {
    oneContainer.classList.remove('pearl');
    twoContainer.classList.remove('pearl');
    threeContainer.classList.remove('pearl');
}

function guessesDisplay() {
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

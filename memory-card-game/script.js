const defaultImages = [
    '/assets/images/card1.jpeg',
    'assets/images/card2.jpeg',
    'assets/images/card3.jpeg',
    'assets/images/card4.jpeg',
    'assets/images/card5.jpeg',
    'assets/images/card6.jpeg'
];

if (!localStorage.getItem('card1')) {
    defaultImages.forEach((path, index) => {
        localStorage.setItem(`card${index + 1}`, path);
    });
}

const images = [
    localStorage.getItem('card1'),
    localStorage.getItem('card2'),
    localStorage.getItem('card3'),
    localStorage.getItem('card4'),
    localStorage.getItem('card5'),
    localStorage.getItem('card6')
];

const board = document.querySelector('#game-board');
const movesDisplay = document.querySelector('#moves');
const pairsDisplay = document.querySelector('#pairs');
const restartBtn = document.querySelector('#restart-btn');
const victoryMsg = document.querySelector('#victory-message');

let flippedCards = [];
let moves = 0;
let pairs = 0;

function startGame() {
    board.innerHTML = '';
    flippedCards = [];
    moves = 0;
    pairs = 0;
    movesDisplay.textContent = moves;
    pairsDisplay.textContent = pairs;
    victoryMsg.style.display = 'none';
}
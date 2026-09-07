const defaultImages = [
    'assets/images/card1.jpeg',
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

    let deck = [...images, ...images];
    deck.sort(() => 0.5 - Math.random());

    deck.forEach(imgSrc => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front">?</div>
                <div class="card-face card-back">
                    <img src="${imgSrc}" alt="Memory card">
                </div>
            </div>
        `;

        // The event listener must live INSIDE the loop so it targets each specific card
        card.addEventListener('click', () => {
            if (flippedCards.length === 2 || card.classList.contains('flipped')) return;

            card.classList.add('flipped');
            flippedCards.push(card);    

            if (flippedCards.length === 2) {
                moves++;
                movesDisplay.textContent = moves;

                let firstImage = flippedCards[0].querySelector('img').src;
                let secondImage = flippedCards[1].querySelector('img').src;

                if (firstImage === secondImage) {
                    pairs++;
                    pairsDisplay.textContent = pairs;
                    flippedCards = [];    
                    
                    if (pairs === 6) {
                        victoryMsg.style.display = 'block';
                    }
                } else {
                    setTimeout(() => {
                        flippedCards[0].classList.remove('flipped');
                        flippedCards[1].classList.remove('flipped');
                        flippedCards = [];
                    }, 1000);
                }
            }
        });

        board.appendChild(card);
    });
}

restartBtn.addEventListener('click', startGame);
startGame();
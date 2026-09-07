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
const objectImage = document.getElementById('object-image');
const dundeeImage = document.getElementById('dundee-image');
const feedbackText = document.getElementById('feedback-text');
const scoreElement = document.getElementById('score');
const gameArea = document.getElementById('game-area');
const feedback = document.getElementById('feedback');

const images = [
    { src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Knife/41YzK84aI+L.jpg', isKnife: true },
	{ src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Knife/i-found-this-strange-knife-in-a-grandpas-old-chest-any-idea-v0-xeedmieim5x91.jpg', isKnife: true },
	{ src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Knife/knife06.jpg', isKnife: true },
    { src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Not Knife/71OPhvMBuRL.jpg', isKnife: false },
	{ src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Not Knife/608465l5.jpg', isKnife: false },
	{ src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Not Knife/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg', isKnife: false },
	{ src: 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Not Knife/LT_471_(LTZ_1471)_Arriva_London_New_Routemaster_(19522859218).jpg', isKnife: false },
    // Add more images here
];

let score = 0;
let currentImage;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('knife-button').addEventListener('click', () => guess(true));
document.getElementById('not-knife-button').addEventListener('click', () => guess(false));

function startGame() {
    gameArea.hidden = false;
    nextRound();
}

function nextRound() {
    feedback.style.display = 'none';
    currentImage = images[Math.floor(Math.random() * images.length)];
    objectImage.src = currentImage.src;
}

function guess(isKnife) {
    if (isKnife === currentImage.isKnife) {
        dundeeImage.src = 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Dundee/maxresdefault.jpg';
        feedbackText.textContent = "Crikey, that's right!";
        score++;
    } else {
        dundeeImage.src = 'C:/Users/Tom/OneDrive/Documents/Knifeornot/Dundee/mick-sue-CROC0916-4fe1a87d2df440f4b5b7590c9480549a.jpg';
        feedbackText.textContent = "Struth, not quite got it mate";
        score--;
    }
    scoreElement.textContent = `Score: ${score}`;
    feedback.style.display = 'block';
    setTimeout(nextRound, 2000); // Wait 2 seconds before next round
}

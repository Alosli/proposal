// Get elements from the DOM
const startGameButton = document.getElementById('startGame');
const gameArea = document.getElementById('gameArea');
const winButton = document.getElementById('winButton');
const proposal = document.getElementById('proposal');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Start the game
startGameButton.addEventListener('click', () => {
  startGameButton.style.display = 'none';
  gameArea.style.display = 'block';
});

// Win the game
winButton.addEventListener('click', () => {
  gameArea.style.display = 'none';
  proposal.style.display = 'block';
});

// Handle the "No" button (make it move around)
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Handle the "Yes" button
yesButton.addEventListener('click', () => {
  alert("Yay! I can't wait to spend forever with you! 💍❤️");
});
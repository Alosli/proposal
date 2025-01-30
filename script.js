// Get elements from the DOM
const cockroach = document.getElementById('cockroach');
const sandal = document.getElementById('sandal');
const proposal = document.getElementById('proposal');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Variables to track dragging
let isDragging = false;
let offsetX, offsetY;

// Make the sandal draggable
sandal.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - sandal.getBoundingClientRect().left;
  offsetY = e.clientY - sandal.getBoundingClientRect().top;
  sandal.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    sandal.style.left = `${x}px`;
    sandal.style.top = `${y}px`;

    // Check if the sandal hits the cockroach
    const sandalRect = sandal.getBoundingClientRect();
    const cockroachRect = cockroach.getBoundingClientRect();

    if (
      sandalRect.left < cockroachRect.right &&
      sandalRect.right > cockroachRect.left &&
      sandalRect.top < cockroachRect.bottom &&
      sandalRect.bottom > cockroachRect.top
    ) {
      // Show the proposal
      proposal.style.display = 'block';
      isDragging = false;
      sandal.style.cursor = 'grab';
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  sandal.style.cursor = 'grab';
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

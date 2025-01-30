// Get elements from the DOM
const cockroach = document.getElementById('cockroach');
const sandal = document.getElementById('sandal');
const proposal = document.getElementById('proposal');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Variables to track dragging
let isDragging = false;
let offsetX, offsetY;

// Function to start dragging
function startDrag(e) {
  isDragging = true;
  const clientX = e.clientX || e.touches[0].clientX; // Handle touch events
  const clientY = e.clientY || e.touches[0].clientY; // Handle touch events
  offsetX = clientX - sandal.getBoundingClientRect().left;
  offsetY = clientY - sandal.getBoundingClientRect().top;
  sandal.style.cursor = 'grabbing';
}

// Function to drag
function drag(e) {
  if (isDragging) {
    const clientX = e.clientX || e.touches[0].clientX; // Handle touch events
    const clientY = e.clientY || e.touches[0].clientY; // Handle touch events
    const x = clientX - offsetX;
    const y = clientY - offsetY;
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
}

// Function to stop dragging
function stopDrag() {
  isDragging = false;
  sandal.style.cursor = 'grab';
}

// Add event listeners for mouse and touch
sandal.addEventListener('mousedown', startDrag);
sandal.addEventListener('touchstart', startDrag);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

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

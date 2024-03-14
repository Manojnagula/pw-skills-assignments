// Get the counter element
const counter = document.getElementById('count');

// Get the buttons
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initial count value
let count = 0;

// Function to update the counter display
function updateCounter() {
    counter.textContent = count;
}

// Event listener for the increment button
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Event listener for the decrement button
decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

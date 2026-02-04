let count = 0;

const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');
const countDisplay = document.getElementById('counter-label');

incrementButton.onclick = function () {
    count++;
    countDisplay.textContent = count;
};

decrementButton.onclick = function () {
    count--;
    countDisplay.textContent = count;
};

resetButton.onclick = function () {
    count = 0;
    countDisplay.textContent = count;
};

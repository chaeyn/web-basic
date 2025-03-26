let count = 0;

const counterElement = document.getElementById('counter');
const plusCount = document.getElementById('plusBtn');
const minusCount = document.getElementById('minusBtn');
const reset = document.getElementById('resetBtn');

plusCount.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
})

minusCount.addEventListener('click', () => {
    count--;
    counterElement.textContent = count;
})

reset.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
})
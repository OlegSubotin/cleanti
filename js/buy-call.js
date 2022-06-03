const btnEl = document.getElementById('buy-btn');
const callEl = document.getElementById('buy-call');
const numEl = document.getElementById('buy-num');

btnEl.addEventListener('mouseover', () => {
    callEl.classList.add('visually-hidden');
    numEl.classList.remove('visually-hidden');
});

btnEl.addEventListener('mouseout', () => {
    callEl.classList.remove('visually-hidden');
    numEl.classList.add('visually-hidden');
});


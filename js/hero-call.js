const btnEl = document.getElementById('hero-btn');
const callEl = document.getElementById('hero-call');
const numEl = document.getElementById('hero-num');

btnEl.addEventListener('mouseover', () => {
    callEl.classList.add('visually-hidden');
    numEl.classList.remove('visually-hidden');
});

btnEl.addEventListener('mouseout', () => {
    callEl.classList.remove('visually-hidden');
    numEl.classList.add('visually-hidden');
});


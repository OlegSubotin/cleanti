const btnEl = document.getElementById('mob-btn');
const callEl = document.getElementById('mob-call');
const numEl = document.getElementById('mob-num');

btnEl.addEventListener('mouseover', () => {
    callEl.classList.add('visually-hidden');
    numEl.classList.remove('visually-hidden');
});

btnEl.addEventListener('mouseout', () => {
    callEl.classList.remove('visually-hidden');
    numEl.classList.add('visually-hidden');
});
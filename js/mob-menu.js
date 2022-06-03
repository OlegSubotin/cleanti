const openBtn = document.getElementById('burger-open');
const closeBtn = document.getElementById('close-btn');
const menuEl = document.getElementById('data-menu');

openBtn.addEventListener('click', () => {
    menuEl.classList.toggle('is-hidden');
});

closeBtn.addEventListener('click', () => {
    menuEl.classList.toggle('is-hidden');
});


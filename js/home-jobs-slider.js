const images = document.querySelectorAll('.jobs-slider-image');
const sliderLine = document.querySelector('.js-slider-line');
let ellipses = document.querySelectorAll('.jobs-ellipse');
let textEl = document.querySelector('.js-change-text');
let count = 0;
let text = 1;
let width;



textEl.innerHTML = text;

function init() {
    width = document.querySelector('.jobs-slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.js-slider-next').addEventListener('click', function () {
    count+=1;
    text += 1;
    if (count >= images.length) {
        count = 0;
        text = 1;
    }
    textEl.innerHTML = text;
    rollSlider();
    colorEllipse(text);
});

document.querySelector('.js-slider-prev').addEventListener('click', function () {
    count -= 1;
    text -= 1;
    if (count < 0) {
        count = images.length - 1;
        text = images.length;
    }
    textEl.innerHTML = text;
    rollSlider();
    colorEllipse(text);
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

};

function colorEllipse(number) {
    ellipses.forEach(ellipse => {
        if (Number(ellipse.id) === number) {
            ellipse.classList.add('ellipse-active')
        };
        if (Number(ellipse.id) !== number) {
            ellipse.classList.remove('ellipse-active')
        };
    });
};


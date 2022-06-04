const objects = document.querySelectorAll('.reviews-slider-card-wrapper');
const sliderLine = document.querySelector('.js-reviews-slider-line');
const prevBtn = document.querySelector('.js-reviews-slider-prev');
const nextBtn = document.querySelector('.js-reviews-slider-next');

let count = 0;
let width;

window.addEventListener('resize', init);
init();

nextBtn.addEventListener('click', onNextBtnClick);
prevBtn.addEventListener('click', onPrevBtnClick);

function init() {
    width = document.querySelector('.reviews-slider').offsetWidth;
    sliderLine.getElementsByClassName.width = width * objects.length + 'px';
    objects.forEach(object => {
        object.style.width = width + 'px';
        object.style.height = 'auto';
    });
    rollSlider();
};

function onNextBtnClick() {
    count += 1;
    if (count >= objects.length) {
        count = 0;
    };
    rollSlider();
}

function onPrevBtnClick() {
    count -= 1;
    if (count < 0) {
        count = objects.length - 1;
    };
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}



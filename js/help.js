let questionEl = document.querySelectorAll('.question-wrapper');
let answerEl = document.querySelectorAll('.answer-wrapper');

questionEl.forEach(question => {
    question.addEventListener('click', searchQuestionId);
});

function searchQuestionId(evt) {
    searchAnswer(evt.currentTarget.id);
};

function searchAnswer(id) {
    answerEl.forEach(answer => {
        if (answer.id === id) {
            answer.classList.toggle('answer-visually-hidden');
        };
    });
};
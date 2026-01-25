// this is the faq accordion 
// we should use event delegation

const questions = document.querySelector('.component-section');
const btn = document.querySelectorAll('button');

btn.addEventListener('click', () => {
    console.log('is has been clicked');
})

questions.addEventListener('click', e => {
    console.log(questions);
})

export {questions};
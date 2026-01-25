// this is the faq accordion 
// we should use event delegation

const questions = document.querySelector('.questions');
console.log(questions);

questions.addEventListener(e => {
    console.log(questions);
})

export {questions};
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const button = question.querySelector('button');
    if(button) {
        button.addEventListener('click', ()=>{
            const questionNumebr = question.getAttribute('data-question');
            const answer = document.getElementById(`answer-${questionNumebr}`);
            const content = button.nextElementSibling;
            if(answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
            } else {
                answer.classList.add('hidden');
            }
        });
    }
});

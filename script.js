const quizData = [
    {
        question: 'Which of the following is a machine independent program?',
        a: 'Assembly language',
        b: 'Machine language',
        c: 'Low level language',
        d: 'High level languag',

        correct: 'd',
    },

    {
        question: 'Which among the following is not an Object Oriented Programming Language?',
        a: 'PASCAL',
        b: 'C++',
        c: 'Java',
        d: 'Python',

        correct: 'a',
    },

    {
        question: 'Which language is CPU dependent?',
        a: 'Assembly',
        b: 'C',
        c: 'Java',
        d: 'Python',

        correct: 'a',

    },

    {
        question: 'The hardware device commonly referred to as the “brain” of the computer?',
        a: 'Secondary storage',
        b: 'CPU',
        c: 'Data input',
        d: 'RAM chip',

        correct: 'b',
    },

    {
        question: 'The first phase of software development is ?',
        a: 'Coding',
        b: 'Testing',
        c: 'Design',
        d: 'Requirement analysis',

        correct: 'd',
    }
];


const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length}.</h2>
           <button onclick="location.reload()">Reload</button>
           `;
        }
    }
});




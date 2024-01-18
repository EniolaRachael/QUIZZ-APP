const questions= [
    {
        question: "Javascript can be defined as?",
        answers: [
            {text: "markup language", correct: false},
            {text: "An operating system", correct: false},
            {text: "A programming language", correct: true},
        ]
    },
    {
        question: "How do you declare variable in Javascript?",
        answers: [
            {text: "variable", correct:true},
            {text: "var", correct: false},
            {text: "let", correct: false},
        ]
    },
    {
        question: "What is the result of the expression?",
        answers: [
            {text: "10", correct: false},
            {text: "55", correct: false},
            {text: "55", correct: true},
        ]
    },

    {
        question: "Javascript can be defined as?",
        answers:[
            {text: "markup language", correct: false},
            {text: "An operating system", correct: false},
            {text: "A programming language", correct: true},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){}
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ", " +  currentQuestionIndex.question;

    currentQuestionIndex.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; 
        button.classList.add("btn");
        answerButtons.appendChild(button);
    

        function resetState(){
            nextButton.styling.display =  "none";
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }
        })

startQuiz();
const questions = [
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia",correct: false},
            {text: "Australia",correct: true},
            {text: "Africa",correct: false},
            {text: "Arctic",correct: false},
        ]
    },
    {
        question: "Which country declared war on Hamas Palestine in 2023?",
        answers: [
            {text: "Russia",correct: false},
            {text: "China",correct: false},
            {text: "Israel",correct: true},
            {text: "Egypt",correct: false},
        ]
    },
    {
        question: "Which city has the highest population in India?",
        answers: [
            {text: "Mumbai",correct: true},
            {text: "Delhi",correct: false},
            {text: "Chennai",correct: false},
            {text: "Kolkata",correct: false},
        ]
    },
    {
        question: "Which is the costliest country to visit?",
        answers: [
            {text: "Norway",correct: false},
            {text: "France",correct: false},
            {text: "USA",correct: false},
            {text: "Switzerland",correct: true},
        ]
    },
    {
        question: "Which country has the best quality of life?",
        answers: [
            {text: "Canada",correct: false},
            {text: "Norway",correct: false},
            {text: "Sweden",correct: true},
            {text: "Finland",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let questionNo = currentQuestionIndex + 1;
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
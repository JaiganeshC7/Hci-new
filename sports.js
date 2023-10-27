const questions = [
    {
        question: "Which country is hosting the 2023 ODI World Cup?",
        answers: [
            {text: "USA",correct: false},
            {text: "India",correct: true},
            {text: "England",correct: false},
            {text: "Australia",correct: false},
        ]
    },
    {
        question: "Who hit the fastest ODI World Cup century?",
        answers: [
            {text: "David Warner",correct: false},
            {text: "Virat Kohli",correct: false},
            {text: "Glenn Maxwel",correct: true},
            {text: "Rohit Sharma",correct: false},
        ]
    },
    {
        question: "Which country won the FIFA 2022 World Cup?",
        answers: [
            {text: "Argentina",correct: true},
            {text: "France",correct: false},
            {text: "England",correct: false},
            {text: "Croatia",correct: false},
        ]
    },
    {
        question: "Who was the Indian finalist against Magnus Carlsen in FIDE chess tournament 2023?",
        answers: [
            {text: "Gukesh",correct: false},
            {text: "Vidit Gujarathi",correct: false},
            {text: "Arjun Erigaisi",correct: false},
            {text: "Praggnanandhaa",correct: true},
        ]
    },
    {
        question: "Which country hosted the 2023 Asian Games?",
        answers: [
            {text: "Korea",correct: false},
            {text: "India",correct: false},
            {text: "China",correct: true},
            {text: "Japan",correct: false},
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
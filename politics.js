const questions = [
    {
        question: "Who is the current Finance Minister of India?",
        answers: [
            {text: "J.P.Nadda",correct: false},
            {text: "Nirmala Sitharaman",correct: true},
            {text: "Rajnath Singh",correct: false},
            {text: "Amit Shah",correct: false},
        ]
    },
    {
        question: "Who was the first president of India?",
        answers: [
            {text: "Jawaharlal Nehru",correct: false},
            {text: "Ambedkar",correct: false},
            {text: "Rajendra Prasad",correct: true},
            {text: "Narendra Modi",correct: false},
        ]
    },
    {
        question: "Recently, India stopped providing visas for which country?",
        answers: [
            {text: "USA",correct: false},
            {text: "Israel",correct: false},
            {text: "Canada",correct: true},
            {text: "Ukraine",correct: false},
        ]
    },
    {
        question: "India banned the export of which food product in 2023?",
        answers: [
            {text: "fruits",correct: false},
            {text: "basmati rice",correct: false},
            {text: "wheat",correct: false},
            {text: "non-basmati rice",correct: true},
        ]
    },
    {
        question: "World's largest stadium is named after which Prime Minister?",
        answers: [
            {text: "Narasimha Rao",correct: false},
            {text: "Rahul Gandhi",correct: false},
            {text: "Narendra Modi",correct: true},
            {text: "Manmohan Singh",correct: false},
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
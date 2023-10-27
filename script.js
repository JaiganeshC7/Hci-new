const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Antartica", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");

const questionno = 0;
const score = 0;

function startquiz() {
  questionno = 0;
  score = 0;
  showquestion();
}

function showquestion() {
  const curquestion = questions[questionno];
  const newquestionno = questionno + 1;
  questionElement.innerHTML = newquestionno + "." + curquestion;

  curquestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}

startquiz();

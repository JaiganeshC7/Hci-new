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
];
const json = localStorage.getItem('form');
const obj = JSON.parse(json);
questions.push(obj);
console.log(questions);
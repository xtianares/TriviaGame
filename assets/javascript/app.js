// trivia questions, q = questions, c = choices and a = index of correct choice
const questions = [
    {
        q: "What is this game?",
        c: ["Trivia Game", "I don't know", "Something Else", "I Need Help"],
        a: 0,
    },
    {
        q: "What is this game 2?",
        c: [ "I don't know", "Something Else", "Trivia Game", "I Need Help"],
        a: 2,
    }
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let currentQuestionIndex = getRandomNumber(0, questions.length),
    currentQuston = questions[currentQuestionIndex];

// trivia questions, q = questions, c = choices and a = index of correct choice
const questions = [
    {
        q: "What ingredient in fresh milk is eventually devoured by bacteria, causing the sour taste?",
        c: ["Lactose", "Conola Oil", "Cocoa Powder", "Calcium"],
        a: 0,
    },
    {
        q: "What type of animal is a skink?",
        c: [ "Dog", "Cat", "Dragon", "Lizard"],
        a: 2,
    }
];

let currentQuestionIndex = getRandomNumber(0, questions.length),
    currentQuston = questions[currentQuestionIndex],
    timer = 15,
    timerId;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function timerInit() {
    $(".timer").html(timer);
    clearInterval(timerId);
    timerId = setInterval(decrement, 1000);
}
function decrement() {
    timer--;
    //  Show the number in the #show-number tag.
    $(".timer").html(timer);
    //  Once number hits zero...
    if (timer === 0) {
        timerStop();
    }
}
function timerStop() {
    clearInterval(timerId);
}
timerInit();

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
    currentQuestion = questions[currentQuestionIndex],
    timer = 5,
    timerId;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function init() {
    timerInit();
    $('.game-row').css('display', 'flex');
    $('.start-area').hide();
}
function timerInit() {
    $(".timer").text(timer);
    clearInterval(timerId);
    timerId = setInterval(decrement, 1000);
}
function decrement() {
    timer--;
    $(".timer").text(timer);
    if (timer === 0) {
        timerStop();
        $(".choices").replaceWith('<div class="times-up"><h3>Times Up!</h3><p>Correct answer is: <p></div>');
    }
}
function timerStop() {
    clearInterval(timerId);
}

$('.start-area').click(function() {
    init();
});

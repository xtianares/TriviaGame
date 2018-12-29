// trivia questions, q = questions, c = choices and a = index of correct choice
const questions = [
    {
        q: "What ingredient in fresh milk is eventually devoured by bacteria, causing the sour taste?",
        c: ["Lactose", "Conola Oil", "Cocoa Powder", "Calcium"],
        a: "Lactose"
    },
    {
        q: "What type of animal is a skink?",
        c: [ "Dog", "Cat", "Dragon", "Lizard"],
        a: "Lizard"
    },
    {
        q: "What color are aircraft black boxes?",
        c: ["Dark Black", "Bright Orange", "Bright Red", "Bright Yellow"],
        a: "Bright Orange"
    }
];

let questionIndex = 0,
    currentQuestion = '',
    questionChoices = '',
    shownQuestionIndex = [],
    correctAnswers = 0,
    wrongAnswers = 0,
    setTimer = 15,
    runningTimer = 0,
    timerId;

function init() {
    timerInit();
    questionIndex = Math.floor(Math.random() * (questions.length));
    currentQuestion = questions[questionIndex].q;
    questionChoices = questions[questionIndex].c;
    console.log(questionIndex, shownQuestionIndex.length, questions.length)
    if (shownQuestionIndex.includes(questionIndex) && shownQuestionIndex.length < questions.length) {
        init();
    }
    else {
        shownQuestionIndex.push(questionIndex);
        //console.log(questionIndex, currentQuestion, shownQuestionIndex)
        $('.game-row').css('display', 'flex');
        $('.start-area').hide();
        $('.number').text(shownQuestionIndex.length); // show current number of question
        $('.total-questions').text(questions.length); // show total number of questions
        $('.question').text(currentQuestion); // display current question
        let choices = '';
        for (var i = 0; i < questionChoices.length; i++) {
            choices += `<button class="btn btn-outline-success answer">${questionChoices[i]}</button>`;
        }
        $('.choices').html(choices); // display current question choices
    }
}
function timerInit() {
    runningTimer = setTimer,
    $(".timer").text(runningTimer);
    clearInterval(timerId);
    timerId = setInterval(decrement, 1000);
}
function decrement() {
    runningTimer--;
    $(".timer").text(runningTimer);
    if (runningTimer === 0) {
        timerStop();
        $(".choices").html('<div class="times-up"><h3>Times Up!</h3><p>Correct answer is: ' + questions[questionIndex].a + '<p></div>');
        if (shownQuestionIndex.length < questions.length) {
            setTimeout(init, 3000);
        }
        else {
            // show game summary function and restart option
            console.log("game over");
        }
    }
}
function timerStop() {
    clearInterval(timerId);
}
function checkAnswer(answer) {
    if (answer === questions[questionIndex].a) {
        correctAnswers++;
        console.log('correctAnswers: ' + correctAnswers);
    }
    else {
        wrongAnswers++;
        console.log('wrongAnswers: ' + wrongAnswers);
    }
}
function restart() {
    shownQuestionIndex = [],
    correctAnswers = 0,
    wrongAnswers = 0;
    init();
}

$('.start-area').click(function() {
    init();
});
$(document).on('click', '.choices .answer', function() {
    let answer = $(this).text();
    checkAnswer(answer);
});

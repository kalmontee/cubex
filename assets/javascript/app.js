// Global Variables
var userInput;
var correctAnswer;
var wrongAnswer;
var question;
var unAnswer;
var images;
var slideIndex = 0;


// target all your questions from 2-6 and set to them to .hide()
$("#intro");
$("#question-1").hide()
$("#question-2").hide();
$("#question-3").hide();
$("#question-4").hide();
$("#question-5").hide();
$("#question-6").hide();

// create a function to start the game
// $("#start-game").click($("#question-1".show()));


// Call this function later
// countDown(); 

function countDown() {
    var count = 15;
    var remainingTime = setInterval(function() {
        $("#countDown").text(count);
        count -= 1;
        if (count <= 0) {
            clearInterval(countDown());
            $(".time").text('TIMES UP!');
        }
    }, 1500);
}

function triviaGame() {
    // if countDown is equal to 0
    // display the correct answer
    // add a +1 to unAnswer
    // display the next question
    // call the countDown function

    // if userInput is equal to correctAnswer
    // add +1 to correctAnswer
    // * display a gif image saying the correct answer, then go to the next question.
    // call the countDown function

    // if userInput is not equal to correctAnswer
    // add +1 to wrongAnswer
    // display a gif saying "Wrong answer" and display the correct answer.
    // go to the next question
    // call the countDown function

}
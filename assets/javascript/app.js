// Global Variables
var userInput;
var correctAnswer;
var wrongAnswer;
var question;
var unAnswer;
var images;
var count = 15;
var slideIndex = 0;


// target all your questions from 2-6 and set to them to .hide()
$("#question-2").hide();
$("#question-3").hide();
$("#question-4").hide();
$("#question-5").hide();
$("#question-6").hide();

// create a function to start the game

var remainingTime = setInterval(function() {
    $("#countDown").text(count);
    count -= 1;
    if (count <= 0) {
        clearInterval(remainingTime);
        $(".time").text('TIMES UP!');
        // alert('Time is up!');
    }
}, 1500);
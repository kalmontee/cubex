// Global Variables
var userInput;
var correctAnswer;
var wrongAnswer;
var unAnswer;
var images;
var slideIndex = 0;

// keep this
// var audio = new Audio("game-of-thrones.mp3");

var trivia = {
    // declare variables inside of the object
    correctAnswer: 0,
    wrongAnswer: 0,
    unAnswer: 0,
    countDown: 20,
    images: null,
    current: 0,

    // questions, choices and answers
    questions: {
        q1: "Who was responsible for the creation of the Night King?",
        q2: "What was Hodor called before he got his tragic door-holding nickname?",
        q3: "Dany's dragons are (or were) called Drogon, Viserion and _____",
        q4: "Where is the House of Black and White, the training temple of the Faceless Men?",
        q5: "Who was Ned Stark's predecessor as Robert Baratheon's Hand?",
        q6: "How many kings and queens of Westeros did Lord Vary's serve?",
    },

    choices: {
        q1: ["The Lord of Light", "The Drowned God", "The First Men", "The Children of the Forest"],
        q2: ["Myrys", "Wylis", "Horys", "Gladys"],
        q3: ["Dougal", "Vhagar", "Raegal", "Balerion"],
        q4: ["Qarth", "Bravos", "Meeren", "No one knows"],
        q5: ["Jamie Lannister", "Jon Arryn", "Tywin Lannister"],
        q6: [2, 3, , 4, 5]
    },

    answers: {
        q1: "The Children of the Forest",
        q2: "Wylis",
        q3: "Raegal",
        q4: "Bravos",
        q5: "Jon Arryn",
        q6: 3,
    },
}


// target all your questions from 2-6 and set to them to .hide()
$("#intro");
$("#question-1").hide()
    // $("#question-2").hide();
    // $("#question-3").hide();
    // $("#question-4").hide();
    // $("#question-5").hide();
    // $("#question-6").hide();

// create a function to start the game
$("#start-game").on('click', function() {
    // inside start game function play the game-of-thrones intro (audio.play())
    // audio.play();

    // Show question the container. 
    $("#question-1").show();

    // begin the coutDown
    countDown();
});


var count = 21;
var intervalId;

function countDown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#intro").hide();

}

function decrement() {
    // decrease the number by one
    count--;

    // Diplsay the count down in the #countDown
    $("#countDown").text(count + ' seconds');

    // when the number hits zero
    if (count === 0) {
        // call the stop function
        stop();

        // tell the user time is up!
        $(".time").text('TIMES UP!');
    }
    console.log(count);
}

function stop() {
    clearInterval(intervalId);
}


function nextQuestion() {

    $("#question").html(questions[0]);



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

// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
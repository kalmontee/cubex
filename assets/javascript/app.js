// Global Variables
// var userInput;
// var correctAnswer;
// var wrongAnswer;
// var unAnswer;
// var images;
// var slideIndex = 0;

// keep this
var audio = new Audio("game-of-thrones.mp3");

var trivia = {
    // declare variables inside of the object
    correctAnswer: 0,
    wrongAnswer: 0,
    unAnswer: 0,
    countDown: 20,
    images: null,
    current: 0,
    currentQuestion: 1,
    currentChoices: 0,

    // questions, choices and answers
    questions: {
        1: "Who was responsible for the creation of the Night King?",
        2: "What was Hodor called before he got his tragic door-holding nickname?",
        3: "Dany's dragons are (or were) called Drogon, Viserion and _____",
        4: "Where is the House of Black and White, the training temple of the Faceless Men?",
        5: "Who was Ned Stark's predecessor as Robert Baratheon's Hand?",
        6: "How many kings and queens of Westeros did Lord Vary's serve?",
    },

    choices: {
        1: ["The Lord of Light", "The Drowned God", "The First Men", "The Children of the Forest"],
        2: ["Myrys", "Wylis", "Horys", "Gladys"],
        3: ["Dougal", "Vhagar", "Raegal", "Balerion"],
        4: ["Qarth", "Bravos", "Meeren", "No one knows"],
        5: ["Jamie Lannister", "Jon Arryn", "Tywin Lannister"],
        6: [2, 3, , 4, 5]
    },

    answers: {
        1: "The Children of the Forest",
        2: "Wylis",
        3: "Raegal",
        4: "Bravos",
        5: "Jon Arryn",
        6: 3,
    },
}


// target all your questions from 2-6 and set to them to .hide()
$("#intro");
$("#question-1").hide()

// create a function to start the game
$("#start-game").on('click', function() {
    // inside start game function play the game-of-thrones intro (audio.play())
    // audio.play();

    // Show question the container. 
    $("#question-1").show();
    // $('#start-game').hide();

    questions();

    // begin the coutDown
    countDown();
});

function questions() {
    // Display the ID question
    $('#question').html(trivia.questions[trivia.currentQuestion]);
    trivia.currentQuestion++;

    // $('#options').html(trivia.choices[trivia.currentChoices]);
    // $('#options').html(trivia.choices[trivia.currentChoices].join('<br>'));
    // trivia.currentChoices++;

    var choicesArr = Object.values(trivia.choices)[trivia.currentChoices];

    // Loop through the choices and display it in a button.
    for (var i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        $('#options').append(button);
    }

    // test
    console.log(trivia.questions[trivia.currentQuestion]);
    console.log(trivia.choices[trivia.currentChoices]);
    // console.log(choicesArr);
}


var count = 21;
var intervalId;

function countDown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

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

    // $("#question").html(questions[0]);

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